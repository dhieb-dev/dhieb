import { useRef } from "react";
import { Container, HeadingSection, Map } from "../components/index";
import { useSectionObserver } from "../hooks/useSectionObserver";
export function Contact() {
  const contactRef = useRef();
  useSectionObserver(contactRef)
  return (
    <Container styles="mb-32">
      <section id="contact" ref={contactRef}>
        <HeadingSection titleSection="Contact"/>
        <p className="text-sm text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia soluta magnam quasi dolorem placeat.</p>
        <div className="content-contact pt-16">
          <div className="md:flex">
            <form className="md:flex-1 [&_input]:py-2 [&_input]:px-4 [&_input]:rounded-full [&_input]:outline-sky-300 [&_input]:w-full [&_input]:shadow-xl [&_input]:bg-slate-200 [&_input]:dark:bg-slate-700 [&_label]:pb-2 [&_label]:pl-4">
              <div className="first-name pb-6">
                <label htmlFor="fName">First Name</label>
                <input id="fName" type="text" />
              </div>
              <div className="last-name pb-6">
                <label htmlFor="lName">Last Name</label>
                <input id="lName" type="text" />
              </div>
              <div className="phone pb-6">
                <label htmlFor="num">Number Phone</label>
                <input id="num" type="number" />
              </div>
              <div className="email pb-6">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" />
              </div>
              <div className="message pb-6">
                <label htmlFor="msg">Message</label>
                <textarea id="msg" className="resize-none w-full h-[500px] rounded py-2 px-4 shadow-xl outline-sky-300 bg-slate-200 dark:bg-slate-700"></textarea>
              </div>
              <input className="cursor-pointer bg-gradient-to-r to-neutral-200 from-sky-100 dark:to-slate-800 dark:from-slate-700 shadow-xl" type="submit" value="Send" />
            </form>
            <div className="info md:pt-40 md:flex-1 max-md:flex max-md:justify-between max-md:mt-10 [&_path]:dark:stroke-slate-100">
              <div className="address flex flex-col items-center md:mb-6 ">
                <svg className="w-10 max-md:mx-auto mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <address>City Rafeha, Mnihla, Tunis, Tunisia</address>
              </div>
              <div className="phone flex flex-col items-center md:mb-6 ">
                <svg className="w-10 max-md:mx-auto mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div><i>++21652525252</i></div>
              </div>
              <div className="email flex flex-col items-center md:mb-6 ">
                <svg className="w-10 max-md:mx-auto mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div><i>dhiebrouissi@gmail.com</i></div>
              </div>
            </div>
          </div>
          <div className="pt-10 flex flex-col items-center">
            <h3 className="pb-6 text-3xl">Map</h3>
            <Map />
          </div>
        </div>
      </section>
    </Container>
  );
};