import { useState } from "react";
import MarkdownIcon from "../icons/FileIcon";
import JSIcon from "../icons/JSIcon";
import SidebarLayout from "../ui/SidebarLayout";
import SidebarDropdownFolderHeader from "../ui/SidebarDropdownFolderHeader";
import SidebarDropdownContentLayout from "../ui/SidebarDropdownContentLayout";

interface AboutMeSidebarProps {
  markdownBio: string;
  markdownExperience: string;
  typescriptContactMe: string;
  javascriptSkills: string;
  tab: { activeTab: string; content: string };
  setTab: (tab: { activeTab: string; content: string }) => void;
}

const AboutMeSidebar: React.FC<AboutMeSidebarProps> = ({
  markdownBio,
  markdownExperience,
  typescriptContactMe,
  javascriptSkills,
  tab,
  setTab,
}) => {
  const [openFolder, setOpenFolder] = useState(true);

  return (
    <SidebarLayout>
      <SidebarDropdownFolderHeader
        folderTitle="personal-info"
        openFolder={openFolder}
        setOpenFolder={setOpenFolder}
      />
      <SidebarDropdownContentLayout openFolder={openFolder}>
        <div
          className={`flex flex-row gap-1 items-center ${
            tab.activeTab === "bio.md" && "bg-accentBorder"
          } p-2 pl-10 cursor-pointer`}
          onClick={() => setTab({ activeTab: "bio.md", content: markdownBio })}
        >
          <MarkdownIcon className="w-4 h-4 fill-[#81A1C1]" />
          <span>bio.md</span>
        </div>
        <div
          className={`flex flex-row gap-1 items-center ${
            tab.activeTab === "experience.md" && "bg-accentBorder"
          } p-2 pl-10 cursor-pointer`}
          onClick={() =>
            setTab({
              activeTab: "experience.md",
              content: markdownExperience,
            })
          }
        >
          <MarkdownIcon className="w-4 h-4 fill-[#81A1C1]" />
          <span>experience.md</span>
        </div>
        <div
          className={`flex flex-row gap-1 items-center ${
            tab.activeTab === "contact-me.js" && "bg-accentBorder"
          } p-2 pl-10 cursor-pointer`}
          onClick={() =>
            setTab({
              activeTab: "contact-me.js",
              content: typescriptContactMe,
            })
          }
        >
          <JSIcon className="w-4 h-4 fill-[#FFFF00]" />
          <span>contact-me.js</span>
        </div>
        <div
          className={`flex flex-row gap-1 items-center ${
            tab.activeTab === "skills.js" && "bg-accentBorder"
          } p-2 pl-10 cursor-pointer`}
          onClick={() =>
            setTab({
              activeTab: "skills.js",
              content: javascriptSkills,
            })
          }
        >
          <JSIcon className="w-4 h-4 fill-[#FFFF00]" />
          <span>skills.js</span>
        </div>
      </SidebarDropdownContentLayout>
    </SidebarLayout>
  );
};

export default AboutMeSidebar;
