'use client'

import Button from "@/components/atoms/Button"
import { useRouter, useSearchParams } from "next/navigation";
import { useProductStore } from "@/store/useProductStore";

export default function ProductActions() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const removeProduct = useProductStore(state => state.removeProduct);

  const handleDelete = () => {
    const productId = Number(prompt("Digite o ID do produto a ser removido:"));
    
    if(isNaN(productId)) {
      alert("ID inválido. Por favor, insira um número.");
      return;
    }

    removeProduct(productId);

    alert(`Produto com ID ${productId} removido.`);
  }

  const handleAdd = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    params.delete("id");
    router.push(`/crud/upsert?${params.toString()}`);
  }

  const handleUpdate = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("id", prompt("Digite o ID do produto a ser atualizado:") || '');    
    router.push(`/crud/upsert?${params.toString()}`);
  }


  return (
    <>
      <Button
        className="mb-6 px-3 py-2 border border-white/20"
        variant='primary'
        onClick={handleAdd}>
        Adicionar Produto
      </Button>
      <Button
        className="mb-6 px-3 py-2 border border-white/20"
        variant='primary'
        onClick={handleDelete}>
        Remover Produto
      </Button>
      <Button
        className="mb-6 px-3 py-2 border border-white/20"
        variant='primary'
        onClick={handleUpdate}>
        Atualizar Produto
      </Button>
    </>
  );
}