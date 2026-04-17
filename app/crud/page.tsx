'use client'

import { useSearchParams } from "next/navigation";
import { useProductStore } from "@/store/useProductStore"
import ProductsDisplay from "@/components/templates/ProductsDisplay";

export default function ProductsPage() {
  const products = useProductStore((state) => state.products)
  const searchParams = useSearchParams();
  
  const filteredProducts = products.filter((product) => {
    const nameFilter = searchParams.get("name")?.toLowerCase() || "";
    const startDateParam = searchParams.get("startDate");
    const endDateParam = searchParams.get("endDate");
    
    const matchesName = product.product.toLowerCase().includes(nameFilter);
    const matchesStartDate = startDateParam ? product.date >= startDateParam : true;
    const matchesEndDate = endDateParam ? product.date <= endDateParam : true;

    return matchesName && matchesStartDate && matchesEndDate;
  });

  const itemsPerPage = parseInt(searchParams.get("limit") || "6");

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentPage = Math.min(totalPages, parseInt(searchParams.get("page") || "1"));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <ProductsDisplay 
    products={paginatedProducts} 
    currentPage={currentPage}
    totalPages={totalPages}/>
  )
}