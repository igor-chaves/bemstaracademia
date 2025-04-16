import { z } from "zod"

export const RegisterFormSchema = z
	.object({
		email: z
			.string()
			.email({ message: "Atenção, coloque um e-mail válido" })
			.trim(),
		password: z
			.string()
			.min(3, { message: "Mínimo 3 caracteres" })
			.max(5, { message: "Máximo 5 caracteres" })
			.trim(),
		confirmPassword: z.string().trim(),
	})
	.superRefine((val, ctx) => {
		if (val.password !== val.confirmPassword) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "senhas não são iguais",
				path: ["confirmPassword"],
			})
		}
	})
 