"use client";
import ArrowIcon from "../components/icons/ArrowIcon";
import FileIcon from "../components/icons/FileIcon";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "highlight.js/styles/atom-one-dark.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CloseIcon from "../components/icons/CloseIcon";
import FolderIcon from "../components/icons/FolderIcon";
import { useState } from "react";
import JSIcon from "../components/icons/JSIcon";

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

### Software Developer at XYZ Company (2021 - Present)
**Responsibilities:**
- Designed and developed intuitive user interfaces and robust backend systems.
- Optimized processes and significantly enhanced user experience.
- Contributed to a wide range of projects for international companies.
- Excelled in both frontend and backend development.
- Ensured seamless integration between frontend and backend systems.

**Achievements:**
- Successfully launched a new user interface that increased user engagement by 30%.
- Implemented a backend system that reduced processing time by 40%.

### Full Stack Developer at ABC Corporation (2019 - 2021)
**Responsibilities:**
- Developed full-stack web applications using React and Node.js.
- Integrated APIs and external services.
- Improved application performance and security.
- Collaborated with multidisciplinary teams to deliver high-quality solutions.
- Worked with agile methodologies to ensure timely delivery.

**Achievements:**
- Led a project that improved application performance by 25%.
- Developed a security feature that reduced vulnerabilities by 50%.
`;

  const typescriptContactMe = `

const contactMe = {
  name: "Santiago Segurado",
  email: "santiagosegurado@icloud.com",
  phone: "+541127201927",
  linkedin: "linkedin.com/in/johndoe",
  github: "github.com/johndoe",
};
  `;

  const [tab, setTab] = useState({
    activeTab: "bio.md",
    content: markdownBio,
  });

  const [openFolder, setOpenFolder] = useState(true);

  return (
    <main className="h-full flex flex-col md:flex-row">
      <aside className="md:h-full h-fit md:max-w-60 w-full md:border-r md:border-accentBorder flex flex-col text-secondaryWhite overflow-hidden">
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
          <span>personal-info</span>
        </div>
        <div className={`flex-col ${openFolder ? "flex" : "hidden"}`}>
          <div
            className={`flex flex-row gap-1 items-center ${
              tab.activeTab === "bio.md" && "bg-accentBorder"
            } p-2 pl-10 cursor-pointer`}
            onClick={() =>
              setTab({ activeTab: "bio.md", content: markdownBio })
            }
          >
            <FileIcon className="w-4 h-4 fill-[#81A1C1]" />
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
            <FileIcon className="w-4 h-4 fill-[#81A1C1]" />
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
            <span>contact-me.ts</span>
          </div>
        </div>
      </aside>
      <section className="flex flex-col h-full w-full overflow-y-scroll">
        <div className="text-secondaryGray border-b border-accentBorder flex-row hidden md:flex">
          {tab.activeTab !== "" && (
            <div className="flex flex-row w-full">
              <div className="flex w-3/6">
                <div className="flex flex-row gap-3">
                  <div className="flex flex-row gap-10 p-3 items-center">
                    <div className="flex flex-row gap-1 items-center">
                      {tab.activeTab !== "contact-me.js" ? (
                        <>
                          <span className="text-secondaryWhite">{tab.activeTab} preview</span>
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
              {tab.activeTab !== "contact-me.js" && (
                <div className="flex w-3/6">
                  <div className="w-[1px] h-full bg-accentBorder"></div>
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-row gap-10 p-3 items-center">
                      <div className="flex flex-row gap-1 items-center">
                        {tab.activeTab !== "contact-me.js" ? (
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
            {tab.activeTab !== "contact-me.js" ? (
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
