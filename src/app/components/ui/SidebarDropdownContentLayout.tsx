interface SidebarDropdownContentLayoutProps {
  openFolder: boolean;
  children?: React.ReactNode;
}
const SidebarDropdownContentLayout = ({
  openFolder,
  children
}: SidebarDropdownContentLayoutProps) => {
  return (
    <div
      className={`flex-col overflow-scroll ${openFolder ? "flex" : "hidden"}`}
    >
      {children}
    </div>
  );
};

export default SidebarDropdownContentLayout;
