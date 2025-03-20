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
			<body className="bg-white">{children}</body>
		</html>
	)
}
