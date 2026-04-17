import * as z from "zod";

export const loginSchema = z.object({
  email: z.email("Insira um email válido."),

  password: z.string()
    .min(1, "A senha é obrigatória.")
    .min(6, "A senha deve conter no mínimo 6 caracteres.")
    .max(64, "A senha deve conter no máximo 64 caracteres."),
});

export type LoginFormData = z.infer<typeof loginSchema>;