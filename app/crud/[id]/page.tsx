import { ProductDetails } from "@/components/templates/ProductDetails";
import { productsData } from "@/data/productsData";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({ params } : ProductPageProps) {
  const { id } = await params;

  const product = productsData.find(product => product.id === parseInt(id));

  if(!product){
    notFound();
  }

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}