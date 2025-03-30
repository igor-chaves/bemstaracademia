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
