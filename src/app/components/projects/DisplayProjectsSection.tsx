interface DisplayProjectsSectionProps {
  children: React.ReactNode;
  activeLanguage: string;
}

const DisplayProjectsSection = ({ children, activeLanguage }: DisplayProjectsSectionProps) => {
  return (
    <section className="flex flex-col h-full w-full overflow-y-scroll lg:overflow-hidden">
      <div className="text-secondaryGray border-b border-accentBorder flex-row hidden md:flex">
        <div className="flex w-3/6">
          <div className="flex flex-row gap-3">
            <div className="flex flex-row gap-10 items-center">
              <div className="flex flex-row gap-1 items-center p-3">
                <span>{activeLanguage}</span>
              </div>
              <div className="w-[1px] h-full bg-accentBorder"></div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default DisplayProjectsSection;
