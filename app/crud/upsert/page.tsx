'use client';

import ProductAddOrUpdate from "@/components/templates/ProductAddOrUpdate";
import { Suspense } from "react";
import { useProductStore } from "@/store/useProductStore";
import { useSearchParams } from "next/navigation";

function ProductAddOrUpdatePage() {
  const products = useProductStore((state) => state.products)
  const searchParams = useSearchParams();

  const id = Number(searchParams.get("id")) || 0;

  const existingProduct = products.find(product => product.id === id);

  return (
    <ProductAddOrUpdate existingProduct={existingProduct}/>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando produtos...</div>}>
      <ProductAddOrUpdatePage />
    </Suspense>
  );
}