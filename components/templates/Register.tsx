import Link from "next/link";
import RegisterForm from "@/components/organisms/RegisterForm";

export default function Register() {
  return (
      <div className="flex flex-col m-auto border border-white/20 w-100 bg-card rounded-xl px-6 py-4">
        <p
          className="text-xl font-bold">
          Crie sua conta</p>

        <p
          className="text-sm text-white/70 mb-6">
          Tudo pronto para começarmos?</p>

        <RegisterForm />

        <p
          className="text-sm text-white/70 mt-4 text-center">
          Já possui uma conta? 
          <Link className="mx-1 underline hover:text-blue-200" href="/login">
            Fazer login
          </Link>
        </p>

      </div>
  )
}