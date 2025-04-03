const MiniSentence = () => {
	return (
		<div className="w-full mx-auto px-4 bg-gray-300 h-[300px] flex align-middle justify-center flex-col">
			<div className="flex align-middle justify-center">
				<blockquote className="relative w-[500px] px-10 py-2 my-1 text-lg italic font-serif leading-relaxed text-gray-800 flex flex-col justify-center align-middle">
					<span className="absolute text-[80px] text-gray-500 -left-5 -top-5">
						“
					</span>
					Movimente-se, supere limites e conquiste o seu bem-estar!
					<cite className="block mt-1 text-sm text-gray-500 before:content-['—\00A0']">
						Autor desconhecido
					</cite>
				</blockquote>
			</div>
		</div>
	)
}

export default MiniSentence
