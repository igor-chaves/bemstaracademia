import Navbar from "@/components/ui/Navbar"
import { ImagesSliderDemo } from "@/components/ui/Hero"
import { AnimatedTestimonials } from "@/components/ui/Testimonials"
import Footer from "@/components/ui/Footer"
import Contact from "@/components/ui/Contact"

export default function Home() {
	const imgsData: string[] = ["./img1.jpg", "./img2.jpg"]

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
		<div className="max-w-[1280px] w-full mx-auto">
			<Navbar />
			<ImagesSliderDemo />
			<AnimatedTestimonials testimonials={testimonialsData} />
			<Contact />
			<Footer />
		</div>
	)
}
