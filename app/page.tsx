import { ImagesSliderDemo } from "@/components/ui/Hero"
import { AnimatedTestimonials } from "@/components/ui/Testimonials"
import Footer from "@/components/ui/Footer"
import Contact from "@/components/ui/Contact"
import { FocusCardsDemo } from "@/components/ui/CardsFocus"
import Features from "@/components/ui/Features"
import Navbar from "@/components/ui/Navbar"

export default function Home() {
	const testimonialsData = [
		{
			quote:
				"A natação me ajudou muito a melhorar minha resistência e a perder peso. Estou me sentindo muito mais saudável!",
			name: "John Doe",
			designation: "Aluno, Academia de Natação",
			src: "/cliente1.avif",
		},
		{
			quote:
				"Os treinos são desafiadores, mas os resultados são incríveis! A evolução que tive é visível e me motiva cada vez mais.",
			name: "Jane Smith",
			designation: "Aluna, Academia de Natação",
			src: "/cliente2.avif",
		},
		{
			quote:
				"A experiência de treinar aqui tem sido fantástica. As aulas são muito bem estruturadas, e os instrutores são ótimos!",
			name: "Alice Johnson",
			designation: "Aluna, Academia de Natação",
			src: "/cliente3.avif",
		},
	]

	return (
		<div className="max-w-[1280px] w-full mx-auto flex flex-col">
			<Navbar />
			<div className="flex  flex-col lg:gap-28 md:gap-16 gap-10">
				<ImagesSliderDemo />
				<Features />
				<FocusCardsDemo />
				<AnimatedTestimonials testimonials={testimonialsData} />
				<Contact />
			</div>
			<Footer />
		</div>
	)
}
