interface ResponsiveNavListProps {
  menuModalToggle: boolean;
  handleMenuModalToggle: () => void;
}

const ResponsiveNavList = ({ menuModalToggle }: ResponsiveNavListProps) => {
  return (
    <div
      className={`absolute w-full bg-primaryBlue flex flex-col justify-between ${
        menuModalToggle
          ? "right-0"
          : "-right-[120%]"
      } transition-all duration-700 `}
    >
      <nav className="flex flex-col items-center h-[calc(100vh-135px)]">
        <ul className="flex flex-col items-center text-secondaryWhite w-full">
          <li className="p-4 border-b border-accentBorder w-full flex">
            <span>_hello</span>
          </li>
          <li className="p-4 border-b border-accentBorder w-full flex">
            <span>_about-me</span>
          </li>
          <li className="p-4 border-b border-accentBorder w-full flex">
            <span>_projects</span>
          </li>
          <li className="p-4 border-b border-accentBorder w-full flex">
            <span>_contact</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveNavList;
