"use client"
import { motion } from "framer-motion"
import React from "react"
import { ImagesSlider } from "./images-slider"

export function ImagesSliderDemo() {
	const images = [
		"https://scontent-itm1-1.xx.fbcdn.net/v/t39.30808-6/462700751_8247738575352703_2183937619155642303_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qG3YhUXf6YEQ7kNvgEFzIIp&_nc_oc=AdhxO0p3Ez6EPwXbN982OMo-qjb6fwN1enZ0mpIMapV1RocgPyrHYZWEvUdFfHPM0aA&_nc_zt=23&_nc_ht=scontent-itm1-1.xx&_nc_gid=Agb-NiscIOWrcUoUMh0J-rp&oh=00_AYAuS7gIH8CdxtmA36yhpDQULE8G5953trFf3dWbY49bgA&oe=67C4E93C",
		"https://scontent-itm1-1.xx.fbcdn.net/v/t39.30808-6/462802326_8411694188945537_6531830633996861781_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i5zfduEjKMsQ7kNvgGCg7EV&_nc_oc=Aditk9z-qKy1ItT--h7pv7xqe6Eoyz69A_1ErmDEEYqeK9uLvO3-joiIzEYXLAJ3wEU&_nc_zt=23&_nc_ht=scontent-itm1-1.xx&_nc_gid=AdIxyD8yskddHYsATAMKo0c&oh=00_AYAfdMOK1YXPgPcV-cKZ41FQRN5oFBE4lyiUyJofzmtvJg&oe=67C4D03E",
		"http://scontent-itm1-1.xx.fbcdn.net/v/t39.30808-6/462752843_8251415771651650_2683378908572166690_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YhtiO7CbrRsQ7kNvgFtvrEa&_nc_oc=AdidCUJZBkHDuOdRC8X4eh4fNAksUloJr9xQe44HLL6EZKrVtCDlgOL5miAurmHpsy0&_nc_zt=23&_nc_ht=scontent-itm1-1.xx&_nc_gid=A1QPs7Y_kuLsA9fmc_RPRHu&oh=00_AYDzubIHn6a1NqSq_49yObr6vtGWexJBWTghzcxaYSs3Nw&oe=67C4DCB3",
	]
	return (
		<ImagesSlider className="h-[30rem] z-0" images={images}>
			<motion.div
				initial={{ opacity: 0, y: -80 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="z-50 flex flex-col justify-center items-center"
			>
				<motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
					Conquiste cada braçada! <br /> Aprenda com a gente
				</motion.p>
				<button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
					<span>Agende sua visita →</span>
					<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
				</button>
			</motion.div>
		</ImagesSlider>
	)
}
