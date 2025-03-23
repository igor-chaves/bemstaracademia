import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Academia Bemstar",
	description: "Saúde para você",
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="bg-white">{children}</body>
		</html>
	)
}
