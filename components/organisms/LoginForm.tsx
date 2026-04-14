'use client'

import { FormProvider } from "react-hook-form";
import { useLogin } from "@/hooks/use-login";
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
          type="submit">
          Entrar
        </Button>

      </form>
    </FormProvider>
  )
}