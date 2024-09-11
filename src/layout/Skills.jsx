import { useRef } from "react";
import { Container, HeadingSection } from "../components/index";
import { useSectionObserver } from "../hooks/useSectionObserver";
import { skillsSvgs } from "../assets/Svgs/skills";
const skills = [
  { skill: "Html", pathImg: skillsSvgs.html, progress: 90, info: "HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links , quotes, and other items." },
  { skill: "Css", pathImg: skillsSvgs.css, progress: 80, info: "CSS is designed to enable the separation of content and presentation , including layout , colors , and fonts ." },
  { skill: "Bootstrap", pathImg: skillsSvgs.bootstrap, progress: 60, info: "Bootstrap (formerly Twitter Bootstrap) is a free and open-source CSS framework directed at responsive, mobile-first front-end web development." },
  { skill: "Tailwindcss", pathImg: skillsSvgs.tailwind, progress: 80, info: "Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables" },
  { skill: "JavaScript", pathImg: skillsSvgs.javascript, progress: 70, info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repellat, quos delectus eum velit autem?" },
  { skill: "React", pathImg: skillsSvgs.react, progress: 70, info: "React can be used to develop single-page , mobile, or server-rendered applications with frameworks like Next.js ." },
  { skill: "Node.js", pathImg: skillsSvgs.nodejs, progress: 60, info: "Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser." },
  { skill: "Exress.js", pathImg: skillsSvgs.expressjs, progress: 70, info: "Express.js , or simply Express , is a back end web application framework for building REST ful APIs with Node.js , released as free and open-source software under the MIT License." },
];
export function Skills() {
  const skillsRef = useRef();
  const SkillsSection = useSectionObserver(skillsRef)
  return (
    <Container styles="mb-32">
      <section id="skills" ref={skillsRef}>
        <HeadingSection titleSection="Skills" />
        <p className="text-sm text-center">To build a full web site you must have the necessary technologies to complete the project</p>
        <div className="content-skills pt-16 flex justify-between flex-wrap">
          {skills?.map(({ skill, pathImg, progress }) => {
            return (
              <div key={skill} className="mb-10 flex items-center w-full md:w-[45%] pb-6 border-b border-neutral-800 dark:border-neutral-200">
                <div className="p-4 w-20 aspect-square bg-zinc-100 rounded-full flex justify-center items-center">
                  {pathImg}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="pb-4">{skill}</h3>
                  <div className="progress relative h-2 rounded-full bg-blue-200">
                    <span style={SkillsSection ? { width: `${progress}%` } : { width: `${0}%` }} className="absolute duration-500 rounded-full h-full bg-sky-500">
                      {SkillsSection && <span className="absolute px-1 py-0.5 text-sm right-0 -top-8 translate-x-1/2 -m-1/2  bg-sky-200 dark:bg-zinc-800 rounded">{progress}%</span>}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Container>
  );
};