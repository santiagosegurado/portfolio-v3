import Image from "next/image";

interface ResponsiveNavbarProps {
  menuModalToggle: boolean;
  handleMenuModalToggle: () => void;
}

const ResponsiveNavbar = ({
  menuModalToggle,
  handleMenuModalToggle,
}: ResponsiveNavbarProps) => {
  return (
    <section className="flex justify-between items-center p-4 text-secondaryGray border border-accentBorder rounded-t-xl md:hidden">
      <div className="w-72 flex items-center">
        <h2>santiago-segurado</h2>
      </div>
      <div onClick={handleMenuModalToggle}>
        {menuModalToggle ? (
          <button>
            <Image src="/menu.svg" alt="menu" width={18} height={18} />
          </button>
        ) : (
          <button>
            <Image src="/close.svg" alt="close" width={18} height={18} />
          </button>
        )}
      </div>

    </section>
  );
};

export default ResponsiveNavbar;
