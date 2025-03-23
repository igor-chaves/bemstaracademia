"use client"

import Image from "next/image"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

type Testimonial = {
	quote: string
	name: string
	designation: string
	src: string
}

export const AnimatedTestimonials = ({
	testimonials,
	autoplay = false,
}: {
	testimonials: Testimonial[]
	autoplay?: boolean
}) => {
	const [active, setActive] = useState(0)
	const [randomRotation, setRandomRotation] = useState<number | null>(null) // estado para armazenar a rotação aleatória

	const handleNext = () => {
		setActive((prev) => (prev + 1) % testimonials.length)
	}

	const handlePrev = () => {
		setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
	}

	const isActive = (index: number) => {
		return index === active
	}

	// Gerar rotação aleatória apenas no cliente (dentro de useEffect)
	useEffect(() => {
		const randomRotateY = Math.floor(Math.random() * 21) - 10
		setRandomRotation(randomRotateY) // atualiza o estado com o valor aleatório
	}, [])

	useEffect(() => {
		if (autoplay) {
			const interval = setInterval(handleNext, 5000)
			return () => clearInterval(interval)
		}
	}, [autoplay])

	return (
		// <footer className="w-full bg-orange-300 ">
		// 	<div className="footer text-base-content max-w-[1280px] w-full mx-auto p-10"></div>
		<div className="w-full">
			<h1 className="max-w-[1280px] mx-auto lg:px-16 lg:text-7xl md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-orange-200 to-orange-400 font-bold mb-6 ml-4">
				Testemunhos
			</h1>
			<div className="w-full mx-auto antialiased font-sans px-6 lg:pb-20 md:px-8 md:py-16 lg:px-12 pt-20 pb-12 bg-gray-200 ">
				<div className="max-w-[1280px] mx-auto lg:px-4">
					<div className="relative grid md:grid-cols-2 gap-10 grid-cols-1">
						<div className="relative z-0">
							<div className="relative lg:h-80 md:h-60 max-w-full h-40">
								<AnimatePresence>
									{testimonials.map((testimonial, index) => (
										<motion.div
											key={testimonial.src}
											initial={{
												opacity: 0,
												scale: 0.9,
												z: -100,
												rotate: randomRotation ?? 0, // usará o valor de rotação aleatória se estiver definido
											}}
											animate={{
												opacity: isActive(index) ? 1 : 0.7,
												scale: isActive(index) ? 1 : 0.95,
												z: isActive(index) ? 0 : -100,
												rotate: isActive(index) ? 0 : randomRotation ?? 0, // mesma coisa aqui
												zIndex: isActive(index)
													? 999
													: testimonials.length + 2 - index,
												y: isActive(index) ? [0, -80, 0] : 0,
											}}
											exit={{
												opacity: 0,
												scale: 0.9,
												z: 100,
												rotate: randomRotation ?? 0, // mesma coisa aqui
											}}
											transition={{
												duration: 0.4,
												ease: "easeInOut",
											}}
											className="absolute inset-0 origin-bottom"
										>
											<Image
												src={testimonial.src}
												alt={testimonial.name}
												width={500}
												height={500}
												draggable={false}
												className="h-full rounded-3xl object-cover object-center"
											/>
										</motion.div>
									))}
								</AnimatePresence>
							</div>
						</div>

						<div className="flex justify-between flex-col py-4">
							<motion.div
								key={active}
								initial={{
									y: 20,
									opacity: 0,
								}}
								animate={{
									y: 0,
									opacity: 1,
								}}
								exit={{
									y: -20,
									opacity: 0,
								}}
								transition={{
									duration: 0.2,
									ease: "easeInOut",
								}}
							>
								<h3 className="text-2xl font-bold-black text-slate-800">
									{testimonials[active].name}
								</h3>
								<p className="text-md  text-gray-500">
									{testimonials[active].designation}
								</p>
								<motion.p className="text-lg text-gray-500 mt-8">
									{testimonials[active].quote.split(" ").map((word, index) => (
										<motion.span
											key={index}
											initial={{
												filter: "blur(10px)",
												opacity: 0,
												y: 5,
											}}
											animate={{
												filter: "blur(0px)",
												opacity: 1,
												y: 0,
											}}
											transition={{
												duration: 0.2,
												ease: "easeInOut",
												delay: 0.02 * index,
											}}
											className="inline-block"
										>
											{word}&nbsp;
										</motion.span>
									))}
								</motion.p>
							</motion.div>

							<div className="flex gap-4 pt-12 md:pt-0">
								<button
									onClick={handlePrev}
									className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center group/button"
								>
									<IconArrowLeft className="h-5 w-5 text-orange-400 group-hover/button:rotate-12 transition-transform duration-300" />
								</button>
								<button
									onClick={handleNext}
									className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center group/button"
								>
									<IconArrowRight className="h-5 w-5 text-orange-400 group-hover/button:-rotate-12 transition-transform duration-300" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
