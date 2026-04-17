import ProductType from '@/types/ProductType';
import ProductItem from "@/components/molecules/ProductItem";

interface ProductContainerProps {
  products: ProductType[];
}

export default function ProductContainer({ products }: ProductContainerProps) {
  if (products.length === 0) return (
    <div className="rounded-lg border-2 border-dashed border-slate-200 py-20 text-center">
      <p className="text-slate-400 font-medium">Nenhum produto encontrado.</p>
    </div>
  );

  return (
    <div className="flex flex-col gap-2">
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};