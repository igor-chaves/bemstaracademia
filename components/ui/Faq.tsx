"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type FAQItem = {
	question: string
	answer: string
}

const faqData: FAQItem[] = [
	{
		question: "Preciso saber nadar para fazer hidroginástica?",
		answer:
			"Não! A hidroginástica é feita em piscina rasa, com exercícios adaptados para todos os níveis. Você pode participar mesmo sem saber nadar, pois não é necessário colocar a cabeça na água.",
	},
	{
		question: "Qual é a idade mínima e máxima para as aulas?",
		answer:
			"Temos turmas para todas as idades! Crianças a partir de 3 anos já podem fazer natação. A hidroginástica e a musculação são indicadas tanto para jovens quanto para adultos e idosos, com acompanhamento profissional.",
	},
	{
		question: "Posso fazer musculação e natação no mesmo plano?",
		answer:
			"Sim! Oferecemos planos combinados que incluem musculação, natação e hidroginástica. Assim você aproveita o melhor dos três e ainda economiza.",
	},
	{
		question: "Pilates ajuda com dores nas costas?",
		answer:
			"Sim! O pilates é excelente para fortalecer a musculatura do core, melhorar a postura e aliviar dores nas costas. Nossos instrutores adaptam os exercícios conforme sua necessidade e condição física.",
	},
	{
		question: "Qual o melhor horário para fazer natação?",
		answer:
			"Depende da sua rotina e objetivos. Pela manhã, a natação ajuda a despertar e ativar o corpo. À noite, pode ser uma forma relaxante de encerrar o dia. Temos turmas em diferentes horários para se adequar a você.",
	},
	{
		question: "É necessário atestado médico para iniciar as aulas?",
		answer:
			"Recomendamos sim apresentar um atestado médico, principalmente para modalidades como musculação, pilates e hidroginástica. Isso garante mais segurança para você durante as atividades.",
	},
]

const Faq2 = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0)

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className="bg-white">
			<div
				className="container max-w-4xl px-6 py-10 mx-auto scroll-mt-20"
				id="faq"
			>
				<h3 className="text-3xl font-semibold text-center text-gray-800 lg:text-5xl ">
					Perguntas <span className="text-orange-500">Frequentes</span>
				</h3>

				<div className="mt-12 space-y-8">
					{faqData.map((faq, index) => (
						<div
							key={index}
							className="border-2 border-orange-300 rounded-lg -700 transition-all duration-300"
						>
							<button
								onClick={() => toggle(index)}
								className="flex items-center justify-between w-full p-8 focus:outline-none"
								aria-expanded={openIndex === index}
								aria-controls={`faq-answer-${index}`}
							>
								<h2 className="font-semibold text-left text-gray-700 ">
									{faq.question}
								</h2>

								<span className="text-white bg-orange-400 rounded-full p-1 ml-4">
									{openIndex === index ? (
										<ChevronUp className="w-6 h-6" />
									) : (
										<ChevronDown className="w-6 h-6" />
									)}
								</span>
							</button>

							{openIndex === index && (
								<>
									<hr className="border-orange-200 " />
									<p
										id={`faq-answer-${index}`}
										className="p-8 text-sm text-gray-500"
									>
										{faq.answer}
									</p>
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Faq2
