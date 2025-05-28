import { z } from "zod";

export const centralSchema = z.object({
  id: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : undefined)),
  name: z.string().min(3, "Mínimo de 3 caracteres"),
  mac: z.string().regex(/^([0-9A-F]{2}:){5}[0-9A-F]{2}$/, "MAC inválido"),
  modelId: z.string().min(1, "Modelo obrigatório").transform(Number),
});

export type CentralFormData = z.infer<typeof centralSchema>;
