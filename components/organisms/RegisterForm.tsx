'use client'

import { auth } from "@/services/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";

import { useRouter } from "next/navigation";

import Field from "@/components/molecules/Field";
import Button from "@/components/atoms/Button";

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

export default function RegisterForm() {
  const router = useRouter();


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

      router.push("/dashboard");
    } catch (error) {
      console.log("erro ao registrar usuario: ", error);
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-5"
        onSubmit={methods.handleSubmit(onSubmit)}>

        <Field
          id="username"
          name="Nome de Usuário"
          placeholder="Digite seu nome de usuário"
        />

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


