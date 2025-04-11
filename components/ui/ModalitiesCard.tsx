"use client"

import Image from "next/image"
import React, { useState } from "react"
import { cn } from "@/lib/utils"

export const Card = React.memo(
	({
		card,
		index,
		hovered,
		setHovered,
	}: {
		card: any
		index: number
		hovered: number | null
		setHovered: React.Dispatch<React.SetStateAction<number | null>>
	}) => (
		<div
			onMouseEnter={() => setHovered(index)}
			onMouseLeave={() => setHovered(null)}
			className={cn(
				"rounded-lg relative bg-gray-100 overflow-hidden h-40 md:h-96 w-full transition-all duration-300 ease-out",
				hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
			)}
		>
			<Image
				src={card.src}
				alt={card.title}
				fill
				className="object-cover absolute inset-0 "
			/>

			<div
				className={cn(
					"absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
					hovered === index ? "opacity-100" : "opacity-0"
				)}
			>
				<div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
					<ul>
						{card.items.map((item: string, index: number) => (
							<div key={index}>
								<li className="text-xs sm:text-sm text-white py-1">{item}</li>
							</div>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
)

Card.displayName = "Card"

type Card = {
	title: string
	src: string
}

const ModalitiesCard = ({ cards }: { cards: Card[] }) => {
	const [hovered, setHovered] = useState<number | null>(null)

	return (
		<div className="flex flex-col gap-5 m-4 scroll-mt-24" id="modalidades">
			<h3 className="lg:text-7xl md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-orange-200 to-orange-400 font-bold pb-4 flex align-middle justify-center ">
				Modalidades
			</h3>

			<div className="grid gap-4 md:gap-12 grid-cols-2 lg:grid-cols-4">
				{cards.map((card, index) => (
					<div key={index}>
						<div className="md:text-3xl text-1xl pb-3 text-gray-600">
							<span>{card.title}</span>
						</div>
						<Card
							key={card.title}
							card={card}
							index={index}
							hovered={hovered}
							setHovered={setHovered}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
export default ModalitiesCard
