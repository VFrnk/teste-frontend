'use client'

import Button from "@/components/atoms/Button";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductSearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [nameFilter, setNameFilter] = useState(searchParams.get("name") || '');
  const [startDate, setStartDate] = useState(searchParams.get("startDate") || '');
  const [endDate, setEndDate] = useState(searchParams.get("endDate") || '');

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (nameFilter) {
      params.set("name", nameFilter);
    } else {
      params.delete("name");
    }

    if (startDate) params.set("startDate", startDate);
    else params.delete("startDate");

    if (endDate) params.set("endDate", endDate);
    else params.delete("endDate");

    params.set("page", "1");
    params.set("limit", "6");

    router.push(`/crud?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 h-10 mb-6">
      <input
        type="text"
        value={nameFilter}
        className="border rounded-md px-3 grow"
        placeholder="Digite o nome para buscar"
        onChange={(e) => setNameFilter(e.target.value)}
      />

      <input
        type="date"
        value={startDate}
        className="border h-10 rounded-md px-3"
        onChange={(e) => setStartDate(e.target.value)}
      />

      <p className="flex items-center"> Até </p>

      <input
        type="date"
        value={endDate}
        className="border h-10 rounded-md px-3"
        onChange={(e) => setEndDate(e.target.value)}
      />

      <Button
        className="px-3 py-2 border border-white/20"
        variant='primary'
        onClick={handleSearch}>
        Filtrar
      </Button>
    </div>
  )
}