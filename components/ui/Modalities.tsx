import ModalitiesCard from "@/components/ui/ModalitiesCard"

const Modalities = () => {
	const cards = [
		{
			title: "Natação",
			src: "/natacao.avif",
			items: [
				"Fortalece todos os músculos",
				"Baixo impacto nas articulações",
				"Aumenta a resistência física",
			],
		},
		{
			title: "Hidroginástica",
			src: "/hidroginastica.avif",
			items: [
				"Exercícios com leveza",
				"Queima calórica eficiente",
				"Ideal para todas as idades",
				"Ajuda na coordenação motora",
			],
		},
		{
			title: "Pilates",
			src: "/pilates.avif",
			items: [
				"Trabalha o core e postura",
				"Alivia dores musculares",
				"Aumenta a flexibilidade",
				"Controle da respiração",
			],
		},
		{
			title: "Musculação",
			src: "/musculacao2.avif",
			items: [
				"Ganho de força e massa",
				"Acelera o metabolismo",
				"Previne lesões",
				"Treinos personalizados",
			],
		},
	]

	return <ModalitiesCard cards={cards} />
}

export default Modalities
