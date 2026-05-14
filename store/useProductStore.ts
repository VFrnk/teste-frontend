import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware"

import { productsData } from "@/data/productsData";
import ProductType from "@/types/ProductType";

interface ProductState {
  products: ProductType[];
  addProduct: (product: Omit<ProductType, "id">) => void;
  removeProduct: (id: number) => void;
  updateProduct: (id: number, updatedProduct: ProductType) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: productsData,
      addProduct: (product) =>
        set((state) => {
          const nextId =
            state.products.length === 0
              ? 1
              : Math.max(...state.products.map((p) => p.id)) + 1;
          const withId: ProductType = { ...product, id: nextId };
          return { products: [withId, ...state.products] };
        }),
      removeProduct: (id) => set((state) => ({products: state.products.filter(product => product.id !== id)})),
      updateProduct: (id, updatedProduct) => set((state) => ({
        products: state.products.map(product => product.id === id ? updatedProduct : product)
      }))
    }),
    {
      name: "products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)