const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-black z-50">
      <nav className="flex justify-between items-center px-10 py-4">

        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide">
          🍷 Elixir Insight
        </div>

        {/* Menu */}
        <ul className="flex gap-8 text-sm">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#benefits" className="hover:text-yellow-400 transition">
              Benefits
            </a>
          </li>

          <li>
            <a href="#drinks" className="hover:text-yellow-400 transition">
              Drinks
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Navbar