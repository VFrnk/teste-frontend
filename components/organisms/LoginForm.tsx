'use client'

import { FormProvider } from "react-hook-form";
import { useLogin } from "@/hooks/useLogin";
import Field from "@/components/molecules/Field";
import Button from "@/components/atoms/Button";

export default function LoginForm() {
  const {methods, onSubmit} = useLogin();

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
          className="w-2/3 h-9 self-center"
          variant="primary"
          type="submit">
          Entrar
        </Button>

      </form>
    </FormProvider>
  )
}