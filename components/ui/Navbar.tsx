"use client"

import { useState } from "react"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const linksNavbar = [
		"home",
		"modalidades",
		"acesso",
		"contato",
		"perguntas frequentes",
	]

	return (
		<nav className="sticky top-0 z-10 bg-white shadow">
			<div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<a href="#">
						<span className="text-gray-700 md:text-2xl tracking-wider font-inter">
							Bemstar
						</span>
					</a>

					{/* Mobile menu button */}
					<div className="flex md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="text-gray-700 hover:text-orange-700 focus:outline-none focus:text-gray-600"
							aria-label="toggle menu"
						>
							{isOpen ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 8h16M4 16h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-orange-300 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
						isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
					}`}
				>
					<div className="flex flex-col md:flex-row md:mx-6">
						{linksNavbar.map((link) => {
							const href =
								link === "home"
									? "#"
									: link === "perguntas frequentes"
									? "#faq"
									: `#${link}`

							return (
								<a
									key={link}
									onClick={() => setIsOpen(!isOpen)}
									className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-orange-500 md:mx-4 md:my-0"
									href={href}
								>
									{link.charAt(0).toUpperCase() + link.slice(1)}
								</a>
							)
						})}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
