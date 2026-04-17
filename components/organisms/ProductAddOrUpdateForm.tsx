'use client';

import { FormProvider, useForm } from "react-hook-form";
import { useProductStore } from "@/store/useProductStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { productSchema, ProductSchemaType } from "@/schemas/productSchema";

import Button from "@/components/atoms/Button";
import Field from "@/components/molecules/Field";
import SelectField from "@/components/molecules/SelectField";
import ProductType from "@/types/ProductType";

interface ProductAddOrUpdateFormProps {
  existingProduct?: ProductType;
}

export default function ProductAddOrUpdateForm({ existingProduct }: ProductAddOrUpdateFormProps) {
  const addProduct = useProductStore(state => state.addProduct);
  const updateProduct = useProductStore(state => state.updateProduct);
  const router = useRouter();

  const methods = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      id: existingProduct ? existingProduct.id.toString() : '',
      product: existingProduct ? existingProduct.product : '',
      category: existingProduct ? existingProduct.category : 'Hardware',
      value: existingProduct ? existingProduct.value.toString() : '',
    },
  })

  const onSubmit = (data: ProductSchemaType) => {
    existingProduct ? updateProduct(existingProduct.id, {
      id: data.id,
      product: data.product,
      category: data.category,
      value: data.value,
      date: new Date().toISOString()
    }) : addProduct({
      id: data.id,
      product: data.product,
      category: data.category,
      value: data.value,
      date: new Date().toISOString()
    });

    router.push("/crud");
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4">
        <Field
          name="ID do produto"
          id="id" />

        <Field
          name="Nome do produto"
          id="product" />

        <SelectField
          name="Categoria do produto"
          id="category">
          <option value="">Selecione uma categoria</option>
          <option value="Hardware">Hardware</option>
          <option value="Áudio">Áudio</option>
          <option value="Periféricos">Periféricos</option>
          <option value="Home Office">Home Office</option>
          <option value="Smartphones">Smartphones</option>
        </SelectField>

        <Field
          name="Preço do produto"
          id="value" />

        <Button
          variant="primary"
          type="submit"
          className="h-9">
          {existingProduct ? "Atualizar Produto" : "Adicionar Produto"}
        </Button>
      </form>
    </FormProvider>
  )
}