import { useState } from 'react';
import { bgSvgs } from './assets/Svgs/bg';
import { BackTop, Themes, Loader } from './components/index';
import { About, Nav, Hero, Services, Contact, Footer, Skills } from './layout/index';
export default function App() {
  const [load, setLoad] = useState(true)
  return (
    <>
      {load && <Loader />}
      <div onLoad={() => setTimeout(() => setLoad(false), 1000)} id='home' className="relative z-[0] overflow-hidden py-2 dark:text-slate-100 bg-neutral-100 dark:bg-neutral-800 ">
        <div className="fixed top-0 left-0 w-full h-full -z-[1] bg-neutral-100 dark:bg-neutral-800 opacity-25">
          {bgSvgs.bg}
        </div>
          <div className='h-20 flex flex-col justify-between fixed right-4 bottom-8 z-10'>
            <div><BackTop /></div>
            <Themes />
          </div>
          <Nav />
          <Hero />
          <About />
          <Skills />
          <Services />
          <Contact />
          <Footer />
      </div>
    </>
  );
};