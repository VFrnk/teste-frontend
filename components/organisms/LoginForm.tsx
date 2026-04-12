'use client'

import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";

import { useRouter } from "next/navigation";

import Field from "@/components/molecules/Field";
import Button from "@/components/atoms/Button";

const loginSchema = z.object({
  email: z.email("Insira um email válido."),

  password: z.string()
    .min(1, "A senha é obrigatória.")
    .min(6, "A senha deve conter no mínimo 6 caracteres.")
    .max(64, "A senha deve conter no máximo 64 caracteres."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();

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
      )

      router.push("/dashboard");

    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      alert("email ou senha inválidos. Tente novamente.");
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-5"
        onSubmit={methods.handleSubmit(onSubmit)}>

        <Field
          id="email"
          name="Email"
          placeholder="Digite seu email"
        />

        <Field
          id="password"
          name="Senha"
          placeholder="Digite sua senha"
          type="password"
        />

        <Button
          type="submit">
          Entrar
        </Button>

      </form>
    </FormProvider>
  )
}