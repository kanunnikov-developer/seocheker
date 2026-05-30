// app/components/form/lib/validate.ts

import { z } from "zod";
import { CITIES } from "./constants";

const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.[a-zA-Z]{2,12}$/;
const validLocations = CITIES.map((city) => city.canonical) as [string, ...string[]];

export const FormSchema = z.object({
  domain: z
    .string()
    .min(3, "Введите домен сайта")
    .transform((val) => val.trim().toLowerCase())
    .refine((val) => domainRegex.test(val), {
      message: "Некорректный формат домена (введите в формате site.com)",
    }),
  keyword: z
    .string()
    .min(3, "Введите хотя бы одно ключевое слово")
    .transform((val) => val.trim().toLowerCase()),
  location: z.enum(validLocations, {
    message: "Выбран неверный или несуществующий регион",
  }),
});

export type FormValidateType = z.infer<typeof FormSchema>;
