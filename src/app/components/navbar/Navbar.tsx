
const Navbar = () => {
  return (
    <header className="w-full border-b border-accentBorder md:flex flex-row text-secondaryGray justify-between px-6 h-16 hidden ">
        <section className="flex flex-row">
            <div className="w-72 flex items-center">
                <h2>santiago-segurado</h2>
            </div>
            <nav className="flex items-center border-x border-accentBorder">
                <ul className="flex flex-row items-center">
                    <li className="px-8">
                        <span>_hello</span>
                    </li>
                    <div className="w-[1px] h-16 bg-accentBorder"/>
                    <li className="px-8">
                        <span>_about-me</span>
                    </li>
                    <div className="w-[1px] h-16 bg-accentBorder"/>
                    <li className="px-8">
                        <span>_projects</span>
                    </li>
                </ul>
            </nav>
        </section>
        <div className="flex items-center border-l border-accentBorder">
            <span className="pl-5">_contact</span>
        </div>
    </header>
  )
}

export default Navbar