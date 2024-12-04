import { useRouter } from "next/navigation";
import CloseIcon from "../icons/CloseIcon";

interface ResponsiveNavListProps {
  menuModalToggle: boolean;
  handleMenuModalToggle: () => void;
}

const ResponsiveNavList = ({
  menuModalToggle,
  handleMenuModalToggle,
}: ResponsiveNavListProps) => {
  const router = useRouter();

  return (
    <div
      className={`absolute w-full bg-primaryBlue flex flex-col justify-between ${
        menuModalToggle ? "right-0" : "-right-[120%]"
      } transition-all duration-700 z-50`}
    >
      <div className="flex w-full p-4 justify-end">
        <button onClick={handleMenuModalToggle}>
          <CloseIcon className="w-4 h-4 fill-secondaryGray" />
        </button>
      </div>
      <nav className="flex flex-col items-center h-[calc(100vh-160px)]">
        <ul className="flex flex-col items-center text-secondaryWhite w-full">
          <li
            className="p-4 border-b border-accentBorder w-full flex"
            onClick={() => {
              router.push("/");
              handleMenuModalToggle();
            }}
          >
            <span>_hello</span>
          </li>
          <li className="p-4 border-b border-accentBorder w-full flex" onClick={() => {
              router.push("/about-me");
              handleMenuModalToggle();
            }}>
            <span>_about-me</span>
          </li>
          <li className="p-4 border-b border-accentBorder w-full flex" onClick={() => {
              router.push("/projects");
              handleMenuModalToggle();
            }}>
            <span>_projects</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveNavList;
