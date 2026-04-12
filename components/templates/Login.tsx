import Link from "next/link";
import LoginForm from "@/components/organisms/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col m-auto border border-white/20 w-100 bg-card rounded-xl px-6 py-4">
      <p
        className="text-xl font-bold">
        Bem-vindo de volta!</p>

      <p
        className="text-sm text-white/70 mb-6">
        Sentimos sua falta.</p>

      <LoginForm />

      <p
        className="text-sm text-white/70 mt-4 text-center">
        Novo por aqui?
        <Link className="mx-1 underline hover:text-blue-200" href="/register">
          Crie sua conta agora
        </Link>
      </p>
    </div>
  )
}