"use client";
import { useState } from "react";
import DisplayProjectsSection from "../components/projects/DisplayProjectsSection";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectsSidebar from "../components/projects/ProjectsSidebar";

const Projects = () => {
  const languages = ["React", "React Native", "Next.js"];

  const projects = [
    {
      id: 1,
      title: "Tap For Change",
      description:
        "Tap For Change is a charity app designed to make it easy to donate to various charitable causes.",
      image: "/tapForChangeImg.png",
      language: languages[2],
      miniDescription: "// Charity App",
      link: "https://test.tap4change.org",
    },
    {
      id: 2,
      title: "SGF Solutions",
      description:
        "SGF Solutions is an application to exchange USDC to Argentine pesos through the blockchain",
      image: "/SGFImg.png",
      language: languages[0],
      miniDescription: "// Exchange app",
      link: "https://staging.sgfsolutions.io/",
    },
    {
      id: 3,
      title: "Play Lokal",
      description:
        "Play Lokal is an application simplifies organisation, payments, and tracking.",
      image: "/PlayLokalImg.png",
      language: languages[1],
      miniDescription: "// Sport App",
      link: "https://www.playlokalsports.com/",
    },
    {
      id: 4,
      title: "Hedgehog",
      description:
        "Hedgehog is application for all your hedge accounting reporting and compliance needs.",
      image: "/HedgehogImg.png",
      language: languages[0],
      miniDescription: "// Financial App",
      link: "https://www.hedgehogsoftware.io/about",
    },
  ];

  const [activeLanguage, setActiveLanguage] = useState(languages[0]);

  return (
    <main className="h-full flex flex-col md:flex-row">
      <ProjectsSidebar
        languages={languages}
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
      />
      <DisplayProjectsSection activeLanguage={activeLanguage}>
        <div className="flex flex-row flex-wrap justify-center h-full overflow-y-scroll p-6 pb-28 gap-6">
          {projects
            .filter((project) => project.language === activeLanguage)
            .map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      </DisplayProjectsSection>
    </main>
  );
};

export default Projects;
