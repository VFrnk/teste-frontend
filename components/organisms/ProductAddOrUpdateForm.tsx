"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useProductStore } from "@/store/useProductStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { productSchema, ProductFormInput, ProductSchemaType } from "@/schemas/productSchema";

import Button from "@/components/atoms/Button";
import Field from "@/components/molecules/Field";
import SelectField from "@/components/molecules/SelectField";
import ProductType from "@/types/ProductType";

interface ProductAddOrUpdateFormProps {
  existingProduct?: ProductType;
}

export default function ProductAddOrUpdateForm({
  existingProduct,
}: ProductAddOrUpdateFormProps) {
  const addProduct = useProductStore((state) => state.addProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);
  const router = useRouter();

  const methods = useForm<ProductFormInput, unknown, ProductSchemaType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      product: existingProduct ? existingProduct.product : "",
      category: existingProduct ? existingProduct.category : "Hardware",
      value: existingProduct ? existingProduct.value.toString() : "",
    },
  });

  const onSubmit = (data: ProductSchemaType) => {
    const date = new Date().toISOString();

    if (existingProduct) {
      updateProduct(existingProduct.id, {
        id: existingProduct.id,
        product: data.product,
        category: data.category,
        value: data.value,
        date,
      });
    } else {
      addProduct({
        product: data.product,
        category: data.category,
        value: data.value,
        date,
      });
    }

    router.push("/crud");
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <Field name="Nome do produto" id="product" />

        <SelectField name="Categoria do produto" id="category">
          <option value="Hardware">Hardware</option>
          <option value="Áudio">Áudio</option>
          <option value="Periféricos">Periféricos</option>
          <option value="Home Office">Home Office</option>
          <option value="Smartphones">Smartphones</option>
        </SelectField>

        <Field name="Preço do produto" id="value" />

        <Button variant="primary" type="submit" className="h-9">
          {existingProduct ? "Atualizar Produto" : "Adicionar Produto"}
        </Button>
      </form>
    </FormProvider>
  );
}
