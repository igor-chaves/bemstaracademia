import { FocusCards } from "@/components/ui/FocusCards"

const Modalities = () => {
	const cards = [
		{
			title: "Natação",
			src: "/natacao.avif",
		},
		{
			title: "Hidroginástica",
			src: "/hidroginastica.avif",
		},
		{
			title: "Hidroterapia - fisioterapeuta dentro da piscina",
			src: "/hidroterapia.avif",
		},
		{
			title: "Pilates",
			src: "/pilates.avif",
		},
		{
			title: "Musculação",
			src: "/musculacao2.avif",
		},
	]

	return <FocusCards cards={cards} />
}
export default Modalities
