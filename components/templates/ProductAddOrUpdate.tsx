import Card from "@/components/atoms/Card";
import ProductAddOrUpdateForm from "@/components/organisms/ProductAddOrUpdateForm";
import ProductType from "@/types/ProductType";

interface ProductAddOrUpdateProps {
  existingProduct?: ProductType;
}

export default function ProductAddOrUpdate({ existingProduct }:  ProductAddOrUpdateProps ) {
  return (
    <Card className="gap-4 w-full max-w-md mx-auto mt-10 p-6">
      <h1 className="text-xl font-bold">Adicionar Produto</h1>
      <ProductAddOrUpdateForm existingProduct={existingProduct} />
    </Card>
  );
}