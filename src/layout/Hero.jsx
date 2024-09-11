import { BtnPrimary, Container } from "../components/index";
import { socialSvgs } from "../assets/Svgs/social";
import { useSectionObserver } from "../hooks/useSectionObserver";
import { useRef } from "react";
const socials = [
  { name: "Facebook", imgPath: socialSvgs.facebook },
  { name: "Twitter", imgPath: socialSvgs.twitter },
  { name: "Whatsapp", imgPath: socialSvgs.whatsapp },
  { name: "Github", imgPath: socialSvgs.github },
  { name: "Linkedin", imgPath: socialSvgs.linkedin },
]
export function Hero() {
  const heroRef = useRef()
  useSectionObserver(heroRef)
  return (
    <Container styles="mb-32">
      <section ref={heroRef} className="relative pt-24 mb-10 md:pt-32 px-10 font-[math] md:flex bg-gradient-to-r to-teal-100 from-sky-50 dark:to-zinc-700 dark:from-slate-800 rounded shadow-lg min-h-[calc(100vh-7rem)]">
        <div className="flex-1">
          <div className=" text-2xl lg:text-4xl mb-6">
            <p>Welcome To My Page</p>
            <h2>I'm Dhieb Rouissi</h2>
          </div>
          <BtnPrimary title="Scroll More" />
          <ul className="relative z-10 flex mt-6">
            {socials?.map((({ name, imgPath }) => {
              return <li key={name} className="[&_span]:hover:-translate-y-0 [&_span]:hover:opacity-100">
                <a className="relative w-10 mr-4" href="xxx">
                  {imgPath}
                  <span className="block absolute -bottom-1/2  text-xs -translate-x-1/2 mx-[50%] font-[cursive] -translate-y-8 opacity-0 duration-300 ease">{name}</span>
                </a>
              </li>
            }))}
          </ul>
        </div>
        <div className="md:w-[60%] max-md:absolute max-md:right-6 max-md:left-6 max-md:bottom-6 max-md:opacity-50 max-md:blur-sm">
          <img src={require("../static/images/hero.png")} alt="" />
        </div>
      </section>
    </Container>
  );
};