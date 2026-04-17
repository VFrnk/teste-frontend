import ProductSearchFilter from "@/components/molecules/ProductSearchFilter";
import ProductsPagination from "@/components/molecules/ProductsPagination";
import ProductActions from "@/components/molecules/ProductsActions";


interface ProductControllerProps {
  currentPage: number;
  totalPages: number;
}

export default function ProductController({ currentPage, totalPages }: ProductControllerProps) {
  return (
    <>
      <div className="flex gap-4">
        <ProductActions></ProductActions>

        <ProductsPagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>

      <ProductSearchFilter />
    </>
  )
}