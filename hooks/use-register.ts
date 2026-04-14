import { auth } from "@/services/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import { useRouter } from "next/navigation";
import { LoginAction } from "@/services/auth";
import { useAuthStore } from "@/store/useAuthStore"

const registerSchema = z.object({
  username: z.string()
    .min(1, "O nome de usuário é obrigatório.")
    .min(3, "O nome de usuário deve conter no mínimo 3 caracteres.")
    .max(50, "O nome de usuário deve conter no máximo 50 caracteres.")
    .trim(),

  email: z
    .email("Insira um email válido."),

  password: z.string()
    .min(1, "A senha é obrigatória.")
    .min(6, "A senha deve conter no mínimo 6 caracteres.")
    .max(64, "A senha deve conter no máximo 64 caracteres."),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const useRegister = () => {
  const router = useRouter();
  const setUser = useAuthStore(state => state.setUser);

  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    }
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

      setUser(user);

      if (result.success) {
        router.push("/dashboard");
      }

    } catch (error) {
      console.log("erro ao registrar usuario: ", error);
      alert("Ocorreu um erro ao registrar. Tente novamente.");
    }
  }

  return { methods, onSubmit };
}