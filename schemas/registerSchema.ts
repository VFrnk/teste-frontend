import * as z from "zod";

export const registerSchema = z.object({
  username: z.string()
    .min(1, "O nome de usuário é obrigatório.")
    .min(3, "O nome de usuário deve conter no mínimo 3 caracteres.")
    .max(50, "O nome de usuário deve conter no máximo 50 caracteres.")
    .trim(),

  email: z
    .email("Insira um email válido."),

  password: z.string()
    .min(1, "A senha é obrigatória.")
    .min(6, "A senha deve conter no mínimo 6 caracteres.")
    .max(64, "A senha deve conter no máximo 64 caracteres."),
});

export type RegisterFormData = z.infer<typeof registerSchema>;