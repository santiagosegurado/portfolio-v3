"use client";
import FileIcon from "../components/icons/FileIcon";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "highlight.js/styles/atom-one-dark.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CloseIcon from "../components/icons/CloseIcon";
import { useState } from "react";
import JSIcon from "../components/icons/JSIcon";
import AboutMeSidebar from "../components/about-me/AboutMeSidebar";

const AboutMe = () => {
  const customStyle = {
    background: "none",
    padding: "0",
  };

  const markdownBio = `# Biography

> With over two years of experience as a Software Developer, I have successfully designed and developed intuitive user interfaces and robust backend systems that optimize processes and significantly enhance user experience. During this time, I have contributed to a wide range of projects for international companies, excelling in both frontend and backend development and ensuring seamless integration between the two.

> My ability to collaborate with multidisciplinary teams has enabled me to contribute to innovative projects from concept to implementation. I have worked with agile methodologies, ensuring timely delivery of high-quality solutions while maintaining a strong focus on scalability, security, and performance. Additionally, my experience in remote development has equipped me with excellent communication skills and the ability to stay highly productive in distributed work environments.
`;

  const markdownExperience = `# Experience

### Bigger [B2B], Australia (remote) (Nov 2023 - Present) — Software Developer
**Responsibilities:**
- Design and develop customized solutions to optimize business processes.
- Implement intuitive user interfaces that improved interaction with enterprise business systems.
- Integrate own and third-party services and APIs to expand the functionality of the platforms.
- Participate in the planning and prioritization of projects in collaboration with multidisciplinary teams using agile methodologies.

**Achievements:**
- Development of an automated tool that reduced recurring manual tasks, increasing customer productivity.
- Recognition for timely delivery of high-quality projects, exceeding client expectations.

### Webcat [SaaS B2B], Colombia (remote) (Mar 2023 - Oct 2023) — Low Code Developer
**Responsibilities:**
- Develop solutions using low-code platforms to accelerate the delivery of functionalities.
- Configure and customize modules according to the specific needs of clients.
- Provide technical support and resolve incidents related to the use of the product.

**Achievements:**
- Significant reduction in project delivery times for clients, achieving faster implementation of solutions compared to initial estimates.
- Consistent customer satisfaction due to proactive and efficient support, obtaining positive feedback for the speed and quality of responses.
`;

  const typescriptContactMe = `
const contactMe = {
  name: "Santiago Segurado",
  email: "santiagosegurado@icloud.com",
  phone: "+541127201927",
  linkedin: "linkedin.com/in/santiago-segurado-frontend/",
  github: "github.com/santiagosegurado",
};
  `;

  const javascriptSkills = `
const languagesAndFrameworks = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Nest.js",
];

const toolsAndTechnologies = [
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "AWS"
  "Docker",
];
`;

  const [tab, setTab] = useState({
    activeTab: "bio.md",
    content: markdownBio,
  });

  return (
    <main className="h-full flex flex-col md:flex-row">
      <AboutMeSidebar
        markdownBio={markdownBio}
        markdownExperience={markdownExperience}
        typescriptContactMe={typescriptContactMe}
        javascriptSkills={javascriptSkills}
        tab={tab}
        setTab={setTab}
      />
      <section className="flex flex-col h-full w-full overflow-y-scroll lg:overflow-hidden">
        <div className="text-secondaryGray border-b border-accentBorder flex-row hidden md:flex">
          {tab.activeTab !== "" && (
            <div className="flex flex-row w-full">
              <div className="flex w-3/6">
                <div className="flex flex-row gap-3">
                  <div className="flex flex-row gap-10 p-3 items-center">
                    <div className="flex flex-row gap-1 items-center">
                      {tab.activeTab.includes(".md") ? (
                        <>
                          <span className="text-secondaryWhite">
                            {tab.activeTab} preview
                          </span>
                        </>
                      ) : (
                        <>
                          <JSIcon className="w-4 h-4 fill-[#FFFF00]" />
                          <span>{tab.activeTab} </span>
                        </>
                      )}
                    </div>
                    <CloseIcon
                      className="w-3 h-3 fill-secondaryGray cursor-pointer"
                      onClick={() => setTab({ activeTab: "", content: "" })}
                    />
                  </div>
                  <div className="w-[1px] h-full bg-accentBorder"></div>
                </div>
              </div>
              {tab.activeTab.includes(".md") && (
                <div className="flex w-3/6">
                  <div className="w-[1px] h-full bg-accentBorder"></div>
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-row gap-10 p-3 items-center">
                      <div className="flex flex-row gap-1 items-center">
                        {tab.activeTab.includes(".md") ? (
                          <>
                            <FileIcon className="w-4 h-4 fill-[#81A1C1]" />
                            <span>{tab.activeTab}</span>
                          </>
                        ) : (
                          <>
                            <JSIcon className="w-4 h-4 fill-[#FFFF00]" />
                            <span>{tab.activeTab}</span>
                          </>
                        )}
                      </div>
                      <CloseIcon
                        className="w-3 h-3 fill-secondaryGray cursor-pointer"
                        onClick={() => setTab({ activeTab: "", content: "" })}
                      />
                    </div>
                    <div className="w-[1px] h-full bg-accentBorder"></div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {tab.activeTab !== "" ? (
          <div className="text-secondaryWhite flex flex-row w-full md:h-full h-fit">
            {tab.activeTab.includes(".md") ? (
              <>
                <div className="md:w-3/6 w-full px-7 py-4 overflow-y-scroll pb-40">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
                    className="markdown-preview overflow-y-scroll"
                  >
                    {tab.content}
                  </ReactMarkdown>
                </div>
                <div className="w-[1px] h-full bg-accentBorder"></div>
                <div className="w-3/6 px-7 py-4 overflow-y-scroll pb-40 hidden md:block">
                  <SyntaxHighlighter
                    showLineNumbers={true}
                    language="markdown"
                    style={atomOneDark}
                    customStyle={customStyle}
                    wrapLongLines={true}
                  >
                    {tab.content}
                  </SyntaxHighlighter>
                </div>
              </>
            ) : (
              <div className="md:w-3/6 px-7 py-4 overflow-y-scroll pb-40">
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="javascript"
                  style={atomOneDark}
                  customStyle={customStyle}
                  wrapLongLines={true}
                >
                  {tab.content}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-3">
            <span className="text-xl text-secondaryWhite font-bold">
              <span className="text-2xl">👈</span> Select a file
            </span>
            <div className="text-secondaryGray flex flex-col items-center">
              <span>You can see the content of the selected files</span>
              <span>in the file explorer</span>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default AboutMe;
