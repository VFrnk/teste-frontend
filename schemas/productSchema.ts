import * as z from "zod";

export const productSchema = z.object({
  id: z.coerce.number<String>().min(1, "ID deve ser um número positivo"),
  product: z.string().min(1, "O nome do produto é obrigatório"),
  category: z.enum([
    "Hardware",
    "Áudio",
    "Periféricos",
    "Home Office",
    "Smartphones",
  ], "Categoria inválida"),
  value: z.coerce.number<String>().min(0, "O valor deve ser um número positivo"),
})

export type ProductSchemaType = z.infer<typeof productSchema>;