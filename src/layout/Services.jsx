import { useRef, useState } from "react";
import { Box, Container, HeadingSection } from "../components/index";
import { useSectionObserver } from "../hooks/useSectionObserver";
const services = [
  { service: "Frontend Development", pathImg: "frontend", article: "Brainvire excels in creating intuitive and responsive user interfaces, ensuring a seamless and engaging user experience. Our frontend development focuses on the latest technologies and languages, such as Mocha, HTML, Angular.js, Vue.js, Node.js, React.js, JavaScript, Bootstrap, CSS/SCSS, UI/UX, SPA, PWA development, and more." },
  { service: "Backend Development", pathImg: "backend", article: "Our backend development expertise ensures robust server-side logic and database management. We create scalable and efficient solutions that power your applications’ functionality with security, stability, and high speed. Our Full-Stack Developers use programming languages like Python, Java, PHP, ASP.NET, Node.js, and Laravel to deliver results." },
  { service: "Full-Stack Development", pathImg: "fullstack", article: "Full-stack development involves both front-end and backend development. Therefore, full-stack developers possess a broad skill set that allows them to handle all layers of web application development. They are proficient in multiple programming languages, frameworks, and technologies required to build end-to-end web solutions." },
  { service: "Responsive Web Development", pathImg: "responsive", article: "Responsive web development services yield websites that adapt and provide an optimal viewing experience across a variety of devices and screen sizes. This web solution utilizes flexible grids, media queries, and other techniques to ensure a consistent and user-friendly experience across different platforms." },
  { service: "API Development", pathImg: "api", article: "Brainvire excels in creating robust APIs that facilitate seamless communication between different software systems. Our API development ensures efficiency, scalability, and secure data transfer, enabling smooth integration with third-party services." },
  { service: "Database Development", pathImg: "database", article: "Brainvire designs and optimizes databases for high performance, security, and scalability. Our database development ensures seamless data management for your applications, with expertise in varied database technologies like PostgreSQL, MySQL, and QL. We help you choose what best suits your requirements." },
  { service: "Mobile App Development", pathImg: "mobile-dev", article: "Brainvire prioritizes user-centric design, ensuring a delightful and intuitive experience. Our UI/UX development focuses on creating visually appealing interfaces that enhance user engagement and satisfaction. Our experts are well-versed in developing UI/UX for all Full Stack App Development and web development across various industries and platforms." },
  { service: "Progressive Web App (PWA) Development", pathImg: "pwa", article: "Brainvire specializes in Progressive Web App (PWA) development, delivering fast, engaging, and reliable web applications that work seamlessly across devices. We enhance user experiences with offline capabilities, push notifications, and rapid loading times." },
];
export function Services() {
  const servicesRef = useRef();
  useSectionObserver(servicesRef)
  const [visibleParaghraph, setVisibleParaghraph] = useState(
    services.reduce((acc, service) => {
      acc[service.service] = true;
      return acc;
    }, {})
  );

  const toggleVisibility = (service) => {
    setVisibleParaghraph((prevVisibleArticles) => ({
      ...prevVisibleArticles,
      [service]: !prevVisibleArticles[service],
    }));
  };
  return (
    <Box>
      <Container styles="mb-32">
        <section id="services" ref={servicesRef}>
          <HeadingSection titleSection="Services" />
          <p className="text-sm text-center">To build a full web site you must have the necessary technologies to complete the project</p>
          <div className="content-services pt-16 md:flex md:justify-between md:flex-wrap md:space-x-2">
            {services.map(({ pathImg, service, article }) => (
              <div key={service} className="row mb-8 md:w-[calc(50%-2rem)]">
                <div className="img mb-4">
                  <img loading="lazy" src={require(`../static/images/${pathImg}.png`)} alt={service} />
                </div>
                <div className="p-1.5 flex justify-between bg-gradient-to-r to-neutral-200 from-sky-100 dark:to-slate-800 dark:from-zinc-700 shadow-xl rounded">
                  <h3 className="service">{service}</h3>
                  <button onClick={() => toggleVisibility(service)} className={visibleParaghraph[service] ? "less" : "more"}>
                    <span className="block w-4 h-4 rounded-full bg-blue-600 dark:bg-sky-300"></span>
                  </button>
                </div>
                {visibleParaghraph[service] && (
                  <div className="mt-4 md:min-h-56 lg:min-h-40 p-1.5 bg-gradient-to-r to-neutral-200 from-sky-100 dark:to-slate-800 dark:from-zinc-700 shadow-xl rounded">
                    <p>{article}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </Container>
    </Box>
  );
};