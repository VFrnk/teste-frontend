import { auth } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { LoginAction } from "@/services/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { useToastStore } from "@/store/useToastStore";
import { mapFirebaseAuthError } from "@/lib/mapFirebaseAuthError";

import { registerSchema } from "@/schemas/registerSchema";
import type { RegisterFormData } from "@/schemas/registerSchema";

export const useRegister = () => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const addToast = useToastStore((state) => state.addToast);

  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: data.username,
      });

      const token = await user.getIdToken();
      const result = await LoginAction(token);

      if (!result.success) {
        addToast(
          "error",
          "Cadastro",
          "Conta criada, mas a sessão no servidor falhou. Entre manualmente."
        );
        return;
      }

      setUser(user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      addToast("error", "Cadastro", mapFirebaseAuthError(error));
    }
  };

  return { methods, onSubmit };
};
