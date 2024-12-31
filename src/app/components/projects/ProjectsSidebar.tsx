"use client";
import { useState } from "react";
import SidebarLayout from "../ui/SidebarLayout";
import SidebarDropdownFolderHeader from "../ui/SidebarDropdownFolderHeader";
import SidebarDropdownContentLayout from "../ui/SidebarDropdownContentLayout";
import CheckboxItem from "./CheckboxItem";

interface ProjectsSidebarProps {
  languages: string[];
  activeLanguage: string;
  setActiveLanguage: (language: string) => void;
}

const ProjectsSidebar = ({
  activeLanguage,
  languages,
  setActiveLanguage,
}: ProjectsSidebarProps) => {
  const [openFolder, setOpenFolder] = useState(true);

  return (
    <SidebarLayout>
      <SidebarDropdownFolderHeader
        folderTitle="projects"
        openFolder={openFolder}
        setOpenFolder={setOpenFolder}
      />
      <SidebarDropdownContentLayout openFolder={openFolder}>
        {languages.map((language) => (
          <CheckboxItem
            key={language}
            checked={activeLanguage === language}
            handleCheckboxChange={() => setActiveLanguage(language)}
            title={language}
          />
        ))}
      </SidebarDropdownContentLayout>
    </SidebarLayout>
  );
};

export default ProjectsSidebar;
