"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ButtonsBackForward } from "@/utils/buttons"
import { motion, AnimatePresence } from "framer-motion"

const testimonialsData = [
	{
		quote:
			"A natação tem me feito muito bem! Sinto que meu condicionamento melhorou e, além disso, é um momento super relaxante do meu dia. A equipe é super profissional e me sinto segura desde o primeiro dia.",
		name: "Marta Aparecida",
		designation: "Aluna, Natação",
		src: "/cliente1.avif",
	},
	{
		quote:
			"Comecei a hidroginástica por recomendação médica e estou amando! As aulas são animadas, os exercícios são leves e eficientes, e ainda faço amigos. Me sinto com muito mais disposição no dia a dia.",
		name: "José Araújo",
		designation: "Aluno, Hidronatação",
		src: "/cliente2.avif",
	},
	{
		quote:
			"Fazer pilates aqui tem sido transformador! As aulas são dinâmicas, com exercícios que realmente ajudam na postura e nas dores do dia a dia. Os instrutores são atenciosos e sempre adaptam os movimentos pra cada aluno.",
		name: "Sérgio dos Reis",
		designation: "Aluno, Pilates",
		src: "/cliente3.avif",
	},
]

const AnimatedTestimonials = () => {
	const [active, setActive] = useState(0)
	const [randomRotation, setRandomRotation] = useState<number | null>(null)

	const isActive = (index: number) => index === active

	const handleNext = () =>
		setActive((prev) => (prev + 1) % testimonialsData.length)

	const handlePrev = () =>
		setActive(
			(prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
		)

	// Gera inclinação aleatória do card com fotos dos clientes
	useEffect(() => {
		const randomRotateY = Math.floor(Math.random() * 21) - 10
		setRandomRotation(randomRotateY)
	}, [])

	return (
		<div className="w-full scroll-m-20" id="testemunhos">
			<h3 className="lg:text-7xl md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-orange-200 to-orange-400 font-bold pb-4 flex align-middle justify-center ">
				Testemunhos
			</h3>

			<div className="w-full mx-auto antialiased font-sans px-6 lg:pb-20 md:px-8 md:py-16 lg:px-12 pt-20 pb-12 mt-8 bg-gray-200 ">
				<div className="max-w-[1280px] mx-auto lg:px-4">
					<div className="relative grid md:grid-cols-2 gap-10 grid-cols-1">
						<div className="relative z-0">
							<div className="relative lg:h-80 md:h-60 max-w-full h-40">
								<AnimatePresence>
									{testimonialsData.map((testimonial, index) => (
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
													: testimonialsData.length + 2 - index,
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
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -20, opacity: 0 }}
								transition={{ duration: 0.2, ease: "easeInOut" }}
							>
								<h3 className="text-2xl font-bold-black text-slate-800">
									{testimonialsData[active].name}
								</h3>
								<p className="text-md text-gray-500">
									{testimonialsData[active].designation}
								</p>
								<motion.p className="text-lg text-gray-500 mt-8">
									{testimonialsData[active].quote
										.split(" ")
										.map((word, index) => (
											<motion.span
												key={index}
												initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
												animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
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

							<div className="flex gap-4 pt-12 md:pt-0 lg:mt-0 md:mt-4">
								<ButtonsBackForward direction="next" setActive={handleNext} />
								<ButtonsBackForward direction="prev" setActive={handlePrev} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AnimatedTestimonials
