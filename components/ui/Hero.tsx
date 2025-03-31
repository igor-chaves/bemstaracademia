"use client"
import { motion } from "framer-motion"
import React from "react"
import { ImagesSlider } from "./images-slider"
import Link from "next/link"

const HeroImageSlide = () => {
	const images = ["/hero1.jpeg"]

	return (
		<ImagesSlider
			className="h-[30rem] z-0 flex items-end pb-8"
			// className="lg:h-[30rem] md:h-[20rem] h-[15rem] z-0 flex items-end pb-8"
			images={images}
		>
			<motion.div
				initial={{ opacity: 0, y: -80 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="z-50 flex flex-col justify-center items-center"
			>
				<motion.p className="font-bold lg:text-7xl text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
					{/* <motion.p className="font-bold lg:text-6xl md:text-4xl text-xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4"> */}
					Conquiste cada braçada! <br />{" "}
					<span className="lg:text-8xl text-6xl text-transparent bg-clip-text bg-gradient-to-b from-orange-100 to-orange-400 font-bold">
						{/* <span className="lg:text-6xl md:text-4xl text-xl text-transparent bg-clip-text bg-gradient-to-b from-orange-100 to-orange-400 font-bold"> */}
						Aprenda
					</span>{" "}
					<span className="lg:text-7xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-300">
						com a gente
					</span>
				</motion.p>
				<Link
					href="#contato"
					className="px-8 py-4 mt-6 text-lg font-medium tracking-wide text-gray-800 hover:text-white capitalize bg-orange-400 hover:bg-orange-300 rounded-md"
				>
					<span>Agende sua visita →</span>
				</Link>
			</motion.div>
		</ImagesSlider>
	)
}
export default HeroImageSlide
