"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";

import { ProductDetails } from "@/components/templates/ProductDetails";
import { useProductStore } from "@/store/useProductStore";

function parseRouteId(idParam: string | string[] | undefined): number {
  const raw = Array.isArray(idParam) ? idParam[0] : idParam;
  if (raw == null || raw === "") return Number.NaN;
  return Number.parseInt(raw, 10);
}

export default function ProductDetailsPage() {
  const params = useParams();
  const id = parseRouteId(params.id);

  const products = useProductStore((s) => s.products);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (useProductStore.persist.hasHydrated()) {
      queueMicrotask(() => setHydrated(true));
      return;
    }
    return useProductStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
  }, []);

  if (!hydrated) {
    return (
      <div className="p-8 text-center text-foreground/80">
        Carregando produto...
      </div>
    );
  }

  if (Number.isNaN(id)) {
    notFound();
  }

  const product = products.find((p) => p.id === id);
  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
