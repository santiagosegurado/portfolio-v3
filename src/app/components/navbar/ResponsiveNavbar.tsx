import Image from "next/image";

interface ResponsiveNavbarProps {
  handleMenuModalToggle: () => void;
}

const ResponsiveNavbar = ({
  handleMenuModalToggle,
}: ResponsiveNavbarProps) => {
  return (
    <section className="flex justify-between items-center p-4 text-secondaryGray border border-accentBorder rounded-t-xl md:hidden">
      <div className="w-72 flex items-center">
        <h2>santiago-segurado</h2>
      </div>
      <button onClick={handleMenuModalToggle} aria-label="Toggle menu">
        <Image src="/menu.svg" alt="menu" width={18} height={18} />
      </button>
    </section>
  );
};

export default ResponsiveNavbar;
