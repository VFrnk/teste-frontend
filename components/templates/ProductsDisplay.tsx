import ProductType from "@/types/ProductType";
import ProductController from "@/components/organisms/ProductController";
import ProductContainer from "@/components/organisms/ProductContainer";

interface ProductsDisplayProps {
  products: ProductType[];
  currentPage: number;
  totalPages: number;
}

export default function ProductsDisplay({ products, currentPage, totalPages }: ProductsDisplayProps) {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10">
      <header className="mb-8 flex items-end justify-between border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-2xl font-black text-foreground">Relatório de Produtos</h2>
          <p className="text-foreground/70">Gerencie os produtos e categorias da sua loja</p>
        </div>
        <span className="text-sm font-medium text-foreground/70">
          página {currentPage} de {totalPages}
        </span>
      </header>

      <ProductController
        currentPage={currentPage}
        totalPages={totalPages} />

      <ProductContainer products={products}/>
    </section>
  )
}