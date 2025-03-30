import Navbar from "@/components/ui/Navbar"
import HeroImageSlide from "@/components/ui/Hero"
import Features from "@/components/ui/Features"
import Modalities from "@/components/ui/Modalities"
import AnimatedTestimonials from "@/components/ui/Testimonials"
import Contact from "@/components/ui/Contact"
import Faq from "@/components/ui/Faq"
import Footer from "@/components/ui/Footer"
import HealthBenefits from "@/components/ui/HealthBenefits"

export default function Home() {
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

				<AnimatedTestimonials />

				<HealthBenefits />

				<Faq />

				<div className="max-w-[1280px] w-full mx-auto px-4">
					<Contact />
				</div>

				<Footer />
			</div>
		</div>
	)
}
