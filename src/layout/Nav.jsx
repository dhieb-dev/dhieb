import { useEffect, useRef, useState } from "react";
import { Container, Logo } from "../components/index";
import { useResizeObserver } from "../hooks/useResizeObserver";
import { navSvgs } from "../assets/Svgs/nav";
const navList = [
  { title: "Home", href: "#home", svgIcon: navSvgs.home },
  { title: "About", href: "#about", svgIcon: navSvgs.about },
  { title: "Skills", href: "#skills", svgIcon: navSvgs.skills },
  { title: "Services", href: "#services", svgIcon: navSvgs.services },
  { title: "Contact", href: "#contact", svgIcon: navSvgs.contact },
];
export function Nav() {
  const isMd = useResizeObserver(768);
  const [showList, setShowList] = useState();
  const menuRef = useRef();
  useEffect(() => {
    isMd ? setShowList(true) : setShowList(false);
    const clickHandler = (e) => { if (!isMd) if (e.target !== menuRef.current) setShowList(false) };
    document.documentElement.addEventListener("click", clickHandler);
    return () => document.documentElement.removeEventListener("click", clickHandler);
  }, [isMd]);
  return (
    <Container>
      <nav className="mt-2 mb-4 p-2 md:flex md:items-center bg-gradient-to-r to-neutral-200 from-sky-100 dark:to-slate-800 dark:from-zinc-700 shadow-xl rounded" >
        <div className="flex justify-between items-center">
          <Logo />
          {!isMd &&
            <button ref={menuRef} onClick={() => setShowList(!showList)} className="cursor-pointer w-8 h-6 flex flex-col justify-between [&>span]:pointer-events-none" >
              <span className="bg-zinc-700 dark:bg-zinc-100 rounded w-full h-1"></span>
              <span className="bg-zinc-700 dark:bg-zinc-100 rounded w-full h-1"></span>
              <span className="bg-zinc-700 dark:bg-zinc-100 rounded w-full h-1"></span>
            </button>}
        </div>
        {showList &&
          <ul className="nav w-full max-md:p-3 md:h-12 md:flex md:justify-around md:items-center max-md:[&_li]:mb-4" >
            {navList.map(({ title, href, svgIcon }) => (
              <li key={title}>
                <a href={href} className="flex items-center">
                  <span className="block w-8">{svgIcon}</span>
                  <span className="pl-2">{title}</span>
                </a>
              </li>
            ))}
          </ul>}
      </nav>
    </Container>
  );
};