const MiniSentence = () => {
	return (
		<div className="w-full h-[400px] flex items-center justify-center relative bg-[url('/parallax.avif')] bg-cover bg-center bg-fixed">
			<div className="relative bg-white/50 p-5 rounded-lg m-8">
				<blockquote className="relative max-w-[500px] px-10 py-2 my-1 text-2xl italic font-serif leading-relaxed text-slate-800 flex flex-col justify-center items-center text-center">
					<span className="absolute text-[80px] text-orange-600 -left-5 -top-11">
						“
					</span>
					<p>Movimente-se, supere limites e conquiste o seu bem-estar!</p>
				</blockquote>
			</div>
		</div>
	)
}

export default MiniSentence
