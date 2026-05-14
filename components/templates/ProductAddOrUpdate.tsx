import Card from "@/components/atoms/Card";
import ProductAddOrUpdateForm from "@/components/organisms/ProductAddOrUpdateForm";
import ProductType from "@/types/ProductType";

interface ProductAddOrUpdateProps {
  existingProduct?: ProductType;
}

export default function ProductAddOrUpdate({
  existingProduct,
}: ProductAddOrUpdateProps) {
  return (
    <Card className="gap-4 w-full max-w-md mx-auto mt-10 p-6">
      <h1 className="text-xl font-bold">
        {existingProduct ? "Editar produto" : "Adicionar produto"}
      </h1>
      {existingProduct ? (
        <p className="text-sm text-foreground/70">
          ID interno: <strong>#{existingProduct.id}</strong>
        </p>
      ) : null}
      <ProductAddOrUpdateForm existingProduct={existingProduct} />
    </Card>
  );
}