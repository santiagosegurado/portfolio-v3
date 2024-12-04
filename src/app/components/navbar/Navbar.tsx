import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();

  const getLeftPosition = (path: string) => {
    if (path === "/") return "left-0";
    if (path === "/about-me") return "left-[161px]";
    if (path === "/projects") return "left-[322px]";
    return "left-0";
  };

  return (
    <header className="w-full border-b border-accentBorder md:flex flex-row text-secondaryGray justify-between px-6 h-16 hidden ">
      <section className="flex flex-row">
        <div className="w-72 flex items-center">
          <h2>santiago-segurado</h2>
        </div>
        <nav className="flex items-center border-x border-accentBorder">
          <ul className="flex flex-row items-center relative">
            <div
              className={`bg-accentOrange h-1 w-40 absolute bottom-0 ${getLeftPosition(
                path
              )} transition-all duration-200 ease-in`}
            />
            <li className="w-40 flex justify-center items-center">
              <button
                className="w-full h-full flex justify-center items-center cursor-pointer"
                onClick={() => router.push("/")}
              >
                <span>_hello</span>
              </button>
            </li>
            <div className="w-[1px] h-16 bg-accentBorder" />
            <li className="w-40 flex justify-center items-center">
              <button
                className="w-full h-full flex justify-center items-center cursor-pointer"
                onClick={() => router.push("/about-me")}
              >
                <span>_about-me</span>
              </button>
            </li>
            <div className="w-[1px] h-16 bg-accentBorder" />
            <li className="w-40 flex justify-center items-center">
              <button
                className="w-full h-full flex justify-center items-center cursor-pointer"
                onClick={() => router.push("/projects")}
              >
                <span>_projects</span>
              </button>
            </li>
          </ul>
        </nav>
      </section>
      <div className="flex items-center border-l border-accentBorder">
        <span className="pl-5">_contact</span>
      </div>
    </header>
  );
};

export default Navbar;
