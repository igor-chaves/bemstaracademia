const HealthBenefits = () => {
	const benefitsData = [
		{
			number: "+20%",
			benefit: "doenças cardíacas",
			text: "Estudos indicam que atividades regulares ajudam a prevenir doenças cardíacas.",
		},
		{
			number: "+25%",
			benefit: "massa muscular",
			text: "Treinamento de força pode aumentar a massa muscular em até 25% em 12 semanas.",
		},
		{
			number: "-50%",
			benefit: "ansiedade e estresse",
			text: "Exercícios aeróbicos reduzem em 50% os sintomas de ansiedade e estresse.",
		},
		{
			number: "+30%",
			benefit: "qualidade de sono",
			text: "Exercícios regulares podem melhorar a qualidade do sono em até 30%.",
		},
		{
			number: "+10",
			benefit: "anos de vida",
			text: "Atividade física regular pode aumentar a expectativa de vida em até 10 anos.",
		},
	]
	return (
		<>
			<h3 className="lg:text-7xl md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-orange-200 to-orange-400 font-bold mb-2 pb-4">
				Benefícios para seu corpo
			</h3>

			<div className="flex gap-4 overflow-x-auto">
				{benefitsData.map(({ number, benefit, text }) => (
					<div className="md:max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-h-[250px] flex flex-col justify-center mb-8">
						<div className="mb-4 md:flex md:w-72 w-56">
							<p className="text-5xl font-semibold text-orange-600 md:mr-2">
								{number}
							</p>
							<p className="text-slate-800 font-bold uppercase flex flex-col justify-end text-medium">
								{benefit}
							</p>
						</div>
						<span className="text-sm md:text-base text-gray-600">{text}</span>
					</div>
				))}
			</div>
		</>
	)
}

export default HealthBenefits
