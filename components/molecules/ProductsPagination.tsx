import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Button from "@/components/atoms/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
};

export default function ProductsPagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const itemsPerPage = searchParams.get("limit") || '6';

  const handleNextPage = () => {
    const params = new URLSearchParams(searchParams.toString());
    const nextPage = Math.min(totalPages, currentPage + 1);

    params.set("page", nextPage.toString());
    params.set("limit", itemsPerPage);

    router.push(`/crud?${params.toString()}`);
  }

  const handlePreviousPage = () => {
    const params = new URLSearchParams(searchParams.toString());
    const previousPage = Math.max(1, currentPage - 1);

    params.set("page", previousPage.toString());
    params.set("limit", itemsPerPage);

    router.push(`/crud?${params.toString()}`);
  }

  const handleLimitChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    params.set("page", "1");
    params.set("limit", e.target.value);

    router.push(`/crud?${params.toString()}`);
  }

  return (
    <div className="flex gap-4 ml-auto h-10">
      <select 
      className="border px-2"
      onChange={handleLimitChange} value={itemsPerPage}>
        <option value="6">6 itens</option>
        <option value="12">12 itens</option>
        <option value="24">24 itens</option>
      </select>
      <Button
        className="px-3 py-2 border border-white/20 disabled:cursor-not-allowed disabled:opacity-50"
        variant="primary"
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}> 
        Página Anterior
      </Button>
      <Button
        className="px-3 py-2 border border-white/20 disabled:cursor-not-allowed disabled:opacity-50"
        variant="primary"
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}>
        Próxima Página
      </Button>
    </div>
  )
}