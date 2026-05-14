"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import Button from "@/components/atoms/Button";
import UserCard from "@/components/organisms/UserCard";
import PieChartCard from "@/components/organisms/PieChartCard";
import LineChartCard from "@/components/organisms/LineChartCard";

import { auth } from "@/services/firebase";
import { LogoutAction } from "@/services/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { useToastStore } from "@/store/useToastStore";

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const addToast = useToastStore((state) => state.addToast);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao encerrar sessão no Firebase:", error);
    }

    const result = await LogoutAction();

    if (result.success) {
      logout();
      router.push("/login");
    } else {
      addToast(
        "error",
        "Sessão",
        "Não foi possível encerrar a sessão no servidor. Tente novamente."
      );
    }
  };

  return (
    <div className="flex flex-col gap-8 py-6 px-8 md:px-32">
      <header className="flex justify-between">
        <h1 className="text-xl font-bold">
          Bem-vindo, {user?.displayName || '...'}
        </h1>
        <Button
          className="h-9 px-4"
          variant="secondary"
          onClick={handleLogout}>
          Sair da Conta
        </Button>
      </header>

      <div className="flex gap-8">
        <UserCard/>
        <PieChartCard/>
      </div>

      <LineChartCard/>
    </div>
  )
}