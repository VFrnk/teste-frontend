'use client'

import { useAuthStore } from "@/store/useAuthStore";
import Card from "@/components/atoms/Card";

export default function UserCard() {
  const user = useAuthStore(state => state.user);
  const loading = useAuthStore(state => state.loading);

  return (
    <Card className="w-1/2">
      <h2 className="text-lg font-bold mb-2">
        Informações do Vendedor
      </h2>
      
      {loading ? (<p>Carregando...</p>): 
      (<>
          <p><strong>Nome:</strong> {user?.displayName}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </>
      )}
    </Card>
  );
}