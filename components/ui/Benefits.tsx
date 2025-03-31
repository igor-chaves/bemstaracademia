const Benefits = () => {
	const benefitsData = [
		{
			number: "-20%",
			benefit: "doenças cardíacas",
			text: "Segundos estudos, atividades regulares ajudam a prevenir doenças cardíacas.",
		},
		{
			number: "+25%",
			benefit: "massa muscular",
			text: "Treinamento de força pode aumentar a massa muscular em 12 semanas.",
		},
		{
			number: "-50%",
			benefit: "ansiedade/estresse",
			text: "Exercícios aeróbicos reduzem em 50% os sintomas de ansiedade e estresse.",
		},
		{
			number: "+30%",
			benefit: "melhor sono",
			text: "Exercícios regulares podem melhorar a qualidade do sono em até 30%.",
		},
		{
			number: "+10",
			benefit: "anos de vida",
			text: "Atividade física regular pode aumentar a expectativa de vida em até 10 anos.",
		},
	]

	const repeatedBenefitsData = [...benefitsData, ...benefitsData]

	return (
		<div>
			<h3 className="lg:text-7xl md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-b from-orange-200 to-orange-400 font-bold pb-4 flex align-middle justify-center ">
				Benefícios para o corpo
			</h3>

			<div className="relative overflow-x-hidden mt-8">
				<div
					className="flex gap-4 animate-scroll p-5 bg-gray-200 h-[250px] overflow-hidden"
					style={{
						maskImage:
							"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))",
						WebkitMaskImage:
							"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))",
					}}
				>
					{repeatedBenefitsData.map(({ number, benefit, text }, index) => (
						<div
							key={index}
							className={`md:max-w-sm bg-white rounded-lg p-4 min-h-[200px] flex flex-col justify-center mb-8 mx-2 item item${index}`}
						>
							<div className="mb-4 md:flex md:w-72 w-56">
								<p className="text-5xl font-semibold text-orange-500 md:mr-2">
									{number}
								</p>
								<p className="text-slate-800 font-bold uppercase flex flex-col justify-end text-sm">
									{benefit}
								</p>
							</div>
							<span className="text-sm md:text-base text-gray-500">{text}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Benefits
