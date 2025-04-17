"use client"

import { register } from "@/lib/auth"
import { useActionState } from "react"

export default function Register() {
	const [state, action, isPendig] = useActionState(register, undefined)

	const classLabel = "block text-sm font-medium text-gray-700 mb-2"
	const classInput =
		"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
	const classSendBtn =
		"w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
			<div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
				<h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Form</h2>

				<form action={action} method="post">
					<div className="mb-6">
						<label htmlFor="email" className={classLabel}>
							E-mail
						</label>
						<input type="text" name="email" className={classInput} />
						{state?.errors?.email && (
							<p className="error">{state.errors.email}</p>
						)}
					</div>

					<div className="mb-6">
						<label htmlFor="password" className={classLabel}>
							Senha
						</label>
						<input type="password" name="password" className={classInput} />
						{state?.errors?.email && (
							<div className="error">
								<p>A senha deve</p>
								<ul className="list-disc list-inside ml-4">
									{/* {state.errors.password.map((err) => (
										<li key={err}>{err}</li>
									))} */}
								</ul>
							</div>
						)}
						<div className="error">
							<p>Senha</p>
						</div>
					</div>

					<div className="mb-6">
						<label htmlFor="confirmPassword" className={classLabel}>
							Confirme a senha
						</label>
						<input
							type="password"
							name="confirmPassword"
							className={classInput}
						/>
						{state?.errors?.confirmPassword && (
							<p className="error">{state.errors.confirmPassword}</p>
						)}
					</div>

					<button type="submit" className={classSendBtn}>
						Enviar
					</button>
				</form>
			</div>
		</div>
	)
}

{
	/* <div className="mb-6">
						<label
							htmlFor="message"
							className={classLabel}
						>
							Message
						</label>
						<textarea
							name="message"
							placeholder="Type your message here"
							rows={5}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						></textarea>
					</div> */
}
