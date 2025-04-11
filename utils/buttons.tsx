import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import Link from "next/link"
import { ReactNode } from "react"

const ButtonsBackForward = ({
	direction,
	setActive,
}: {
	direction: "next" | "prev"
	setActive: React.MouseEventHandler<HTMLButtonElement>
}) => {
	const classBtn =
		"h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center group/button"
	const classIcon =
		"h-5 w-5 text-orange-400 group-hover/button:rotate-12 transition-transform duration-300"

	return (
		<button onClick={setActive} className={classBtn}>
			{direction === "next" ? (
				<IconArrowLeft className={classIcon} />
			) : (
				<IconArrowRight className={classIcon} />
			)}
		</button>
	)
}

const ButtonCTA = ({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) => {
	const btnClass =
		"px-6 py-3 mt-6 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-orange-300 rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
	// return <button className={`${btnClass} ${className}`}>{children}</button>
	return (
		<Link href="#contato">
			<button className="px-6 py-3 mt-6 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-orange-300 rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
				{children}
			</button>
		</Link>
	)
}

export { ButtonsBackForward, ButtonCTA }
