"use server"

import { RegisterFormSchema } from "./rules"

export async function register(state: any, formData: FormData) {
	const validatedFields = RegisterFormSchema.safeParse({
		email: formData.get("email"),
		password: formData.get("password"),
		confirmPassword: formData.get("confirmPassword"),
	})

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			email: formData.get("email"),
		}
	}

	console.log("AFTER: ", validatedFields)
}
