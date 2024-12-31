import ArrowIcon from "../icons/ArrowIcon";
import FolderIcon from "../icons/FolderIcon";

interface SidebarDropdownFolderHeaderProps {
  openFolder: boolean;
  setOpenFolder: (openFolder: boolean) => void;
  folderTitle: string;
}

const SidebarDropdownFolderHeader = ({
  openFolder,
  setOpenFolder,
  folderTitle,
}: SidebarDropdownFolderHeaderProps) => {
  return (
    <div
      className="text-secondaryWhite flex flex-row items-center gap-1 p-3 cursor-pointer"
      onClick={() => setOpenFolder(!openFolder)}
    >
      <ArrowIcon
        className={`w-5 h-5 fill-secondaryWhite transition-transform duration-300 ${
          openFolder ? "rotate-0" : "-rotate-90"
        }`}
      />
      <FolderIcon className="w-4 h-4 fill-secondaryGray" />
      <span>{folderTitle}</span>
    </div>
  );
};

export default SidebarDropdownFolderHeader;
