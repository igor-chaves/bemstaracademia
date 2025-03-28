import Navbar from "@/components/ui/Navbar"
import HeroImageSlide from "@/components/ui/Hero"
import Features from "@/components/ui/Features"
import Modalities from "@/components/ui/Modalities"
import AnimatedTestimonials from "@/components/ui/Testimonials"
import Contact from "@/components/ui/Contact"
import Faq from "@/components/ui/Faq"
import Footer from "@/components/ui/Footer"

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
		<div className="w-full flex flex-col">
			<Navbar />

			<div className="flex flex-col lg:gap-28 md:gap-16 gap-10">
				<HeroImageSlide />

				<div className="max-w-[1280px] w-full mx-auto px-4">
					<Features />
				</div>

				<div className="max-w-[1280px] w-full mx-auto px-4">
					<Modalities />
				</div>

				<AnimatedTestimonials testimonials={testimonialsData} />
				<Faq />

				<div className="max-w-[1280px] w-full mx-auto px-4">
					<Contact />
				</div>

				<Footer />
			</div>
		</div>
	)
}
