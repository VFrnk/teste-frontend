import { auth } from "@/services/firebase";
import { LoginAction } from "@/services/auth";
import { useAuthStore } from "@/store/useAuthStore";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";

import { loginSchema } from "@/schemas/loginSchema";
import type { LoginFormData } from "@/schemas/loginSchema";

export const useLogin = () => {
  const router = useRouter();
  const setUser = useAuthStore(state => state.setUser);

  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
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

      setUser(user);

      if (result.success) {
        router.push("/dashboard");
      }

    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      alert("email ou senha inválidos. Tente novamente.");
    }
  }

  return { methods, onSubmit };
}