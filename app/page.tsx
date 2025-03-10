import Navbar from "@/components/ui/Navbar"
import { ImagesSliderDemo } from "@/components/ui/Hero"
import { AnimatedTestimonials } from "@/components/ui/Testimonials"
import Footer from "@/components/ui/Footer"
import Contact from "@/components/ui/Contact"
import { FocusCardsDemo } from "@/components/ui/CardsFocus"
import Features from "@/components/ui/Features"

export default function Home() {
	const testimonialsData = [
		{
			quote:
				"A natação me ajudou muito a melhorar minha resistência e a perder peso. Estou me sentindo muito mais saudável!",
			name: "John Doe",
			designation: "Aluno, Academia de Natação",
			src: "/test1.png",
		},
		{
			quote:
				"Os treinos são desafiadores, mas os resultados são incríveis! A evolução que tive é visível e me motiva cada vez mais.",
			name: "Jane Smith",
			designation: "Aluna, Academia de Natação",
			src: "/test2.png",
		},
		{
			quote:
				"A experiência de treinar aqui tem sido fantástica. As aulas são muito bem estruturadas, e os instrutores são ótimos!",
			name: "Alice Johnson",
			designation: "Aluna, Academia de Natação",
			src: "/test3.png",
		},
	]

	return (
		<div className="max-w-[1280px] w-full mx-auto flex flex-col gap-28">
			<Navbar />
			<ImagesSliderDemo />
			<Features />
			<FocusCardsDemo />
			<AnimatedTestimonials testimonials={testimonialsData} />
			<Contact />
			<Footer />
		</div>
	)
}
