import { auth } from "@/services/firebase";
import { LoginAction } from "@/services/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { useToastStore } from "@/store/useToastStore";
import { mapFirebaseAuthError } from "@/lib/mapFirebaseAuthError";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { loginSchema } from "@/schemas/loginSchema";
import type { LoginFormData } from "@/schemas/loginSchema";

export const useLogin = () => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const addToast = useToastStore((state) => state.addToast);

  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;
      const token = await user.getIdToken();
      const result = await LoginAction(token);

      if (!result.success) {
        addToast(
          "error",
          "Login",
          "Não foi possível criar a sessão no servidor. Tente novamente."
        );
        return;
      }

      setUser(user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      addToast("error", "Login", mapFirebaseAuthError(error));
    }
  };

  return { methods, onSubmit };
};
