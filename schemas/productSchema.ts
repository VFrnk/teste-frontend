import * as z from "zod";

const priceFromInput = z
  .string()
  .min(1, "O preço é obrigatório")
  .transform((s) => Number.parseFloat(s.replace(",", ".")))
  .pipe(
    z
      .number()
      .refine((n) => Number.isFinite(n), "Informe um número válido")
      .min(0, "O valor deve ser zero ou positivo")
  );

export const productSchema = z.object({
  product: z.string().min(1, "O nome do produto é obrigatório"),
  category: z.enum(
    [
      "Hardware",
      "Áudio",
      "Periféricos",
      "Home Office",
      "Smartphones",
    ],
    { message: "Categoria inválida" }
  ),
  value: priceFromInput,
});

export type ProductFormInput = z.input<typeof productSchema>;
export type ProductSchemaType = z.infer<typeof productSchema>;
