import { auth } from "@/services/firebase";
import { LoginAction } from "@/services/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import * as z from "zod";

const loginSchema = z.object({
  email: z.email("Insira um email válido."),

  password: z.string()
    .min(1, "A senha é obrigatória.")
    .min(6, "A senha deve conter no mínimo 6 caracteres.")
    .max(64, "A senha deve conter no máximo 64 caracteres."),
});

type LoginFormData = z.infer<typeof loginSchema>;

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