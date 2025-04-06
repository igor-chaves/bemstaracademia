import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

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

const ButtonsBackForward = ({direction, setActive}: {direction: "next" | "prev", setActive: React.MouseEventHandler<HTMLButtonElement>}) => {
	const classBtn = "h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center group/button"
	const classIcon = "h-5 w-5 text-orange-400 group-hover/button:rotate-12 transition-transform duration-300"

	return (
		<button onClick={setActive} className={classBtn}>
			{direction === "next" ? <IconArrowLeft className={classIcon} /> : <IconArrowRight className={classIcon} />}
		</button>
	)
}

export { ButtonsBackForward }
