"use client"
import { motion } from "framer-motion"
import React from "react"
import { ImagesSlider } from "./images-slider"
import Link from "next/link"

const HeroImageSlide = () => {
	const images = ["/hero1.jpeg"]
	return (
		<ImagesSlider
			className="lg:h-[30rem] md:h-[20rem] h-[15rem] z-0 flex items-end pb-8"
			images={images}
		>
			<motion.div
				initial={{ opacity: 0, y: -80 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="z-50 flex flex-col justify-center items-center"
			>
				<motion.p className="font-bold lg:text-6xl md:text-4xl text-xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
					Conquiste cada braçada! <br />{" "}
					<span className="lg:text-6xl md:text-4xl text-xl text-transparent bg-clip-text bg-gradient-to-b from-orange-100 to-orange-400 font-bold">
						Aprenda
					</span>{" "}
					com a gente
				</motion.p>
				<Link
					href="#contato"
					className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative lg:mt-4 md:mt-2 mt-0"
				>
					<span id="contact" className="lg:text-2xl md:text-xl text-xs">
						Agende sua visita →
					</span>
					<div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
				</Link>
			</motion.div>
		</ImagesSlider>
	)
}
export default HeroImageSlide
