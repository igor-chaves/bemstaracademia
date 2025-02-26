const Navbar = () => {
	return (
		<nav className="flex justify-between bg-black text-white px-10 py-3 sticky top-0 z-10">
			<h2>BEMSTAR</h2>
			<ul className="flex gap-5">
				<li>INICIO</li>
				<li>TREINOS</li>
				<li>PRECOS</li>
				<li>CONTATO</li>
				<li>DEPOIMENTOS</li>
			</ul>
		</nav>
	)
}

export default Navbar
