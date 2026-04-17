'use client'

import Button from "@/components/atoms/Button"
import { useProductStore } from "@/store/useProductStore";

export default function ProductActions() {
  const removeProduct = useProductStore(state => state.removeProduct);
  const addProduct = useProductStore(state => state.addProduct);
  const updateProduct = useProductStore(state => state.updateProduct);

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
    const productName = prompt("Digite o nome do produto:");
    const productCategory = prompt("Digite a categoria do produto:");
    const productValue = Number(prompt("Digite o valor do produto:"));

    if (!productName || !productCategory || isNaN(productValue)) {
      alert("Dados inválidos. Por favor, preencha todos os campos corretamente.");
      return;
    }

    if(productCategory !== "Hardware" && productCategory !== "Áudio" && productCategory !== "Periféricos" && productCategory !== "Home Office" && productCategory !== "Smartphones") {
      alert("Categoria inválida. Por favor, escolha entre: Hardware, Áudio, Periféricos, Home Office ou Smartphones.");
      return;
    }

    addProduct({
      id: Date.now(),
      product: productName,
      category: productCategory,
      value: productValue,
      date: new Date().toISOString()
    });
  }

  const handleUpdate = () => {
    const productId = Number(prompt("Digite o ID do produto a ser atualizado:"));
    
    if(isNaN(productId)) {
      alert("ID inválido. Por favor, insira um número.");
      return;
    }

    const productName = prompt("Digite o novo nome do produto:");
    const productCategory = prompt("Digite a nova categoria do produto:");
    const productValue = Number(prompt("Digite o novo valor do produto:"));

    if (!productName || !productCategory || isNaN(productValue)) {
      alert("Dados inválidos. Por favor, preencha todos os campos corretamente.");
      return;
    }

    if(productCategory !== "Hardware" && productCategory !== "Áudio" && productCategory !== "Periféricos" && productCategory !== "Home Office" && productCategory !== "Smartphones") {
      alert("Categoria inválida. Por favor, escolha entre: Hardware, Áudio, Periféricos, Home Office ou Smartphones.");
      return;
    }

    updateProduct({
      id: productId,
      product: productName,
      category: productCategory,
      value: productValue,
      date: new Date().toISOString()
    });

    alert(`Produto com ID ${productId} atualizado.`);
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