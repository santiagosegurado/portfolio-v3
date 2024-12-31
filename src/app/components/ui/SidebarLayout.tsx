interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <aside className="md:h-full h-fit md:max-w-60 w-full md:border-r md:border-accentBorder flex flex-col text-secondaryWhite">
      {children}
    </aside>
  );
};

export default SidebarLayout;
