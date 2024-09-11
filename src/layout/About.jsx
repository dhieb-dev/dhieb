import { useRef } from "react";
import { Box, Container, HeadingSection } from "../components/index";
import { useSectionObserver } from "../hooks/useSectionObserver";
const listArr = [
  { head: "1. Strengthening digital precise:", p: "an advanced and effective Web site enhances your presence on the Internet and easy access to your products or services." },
  { head: "2. Expected user experience:", p: "Web site is designed and well-used use increases customer satisfaction and encourages them to interact with your brand." },
  { head: "3. Improved performance:", p: "a fast and stable Web site attracts more visitors and increases conversion rates." },
  { head: "4. Integration with modern techniques:", p: "Continuous development allows you to take advantage of the latest technologies and tools to improve your site and functions." },
];
export function About() {
  const aboutRef = useRef()
  useSectionObserver(aboutRef)
  return (
    <Box>
      <Container styles="mb-32">
        <section ref={aboutRef} id="about">
          <HeadingSection titleSection="About" />
          <p className="text-sm text-center">A web developer’s job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website’s performance and capacity.</p>
          <div className="flex flex-col md:items-center md:flex-row md:justify-between pt-16 max-md:pt-10">
            <div className="md:flex-1 max-md:order-1">
              <div className="row pb-10">
                <h2 className="text-2xl font-medium w-fit border-b-2 border-teal-300">Who am I ?</h2>
                <p className="pt-6">My name is Dhieb Rouissi and I am from Tunisia my age 27 years. I liked the idea of being a web developer and since then I want to get to the top of this specialty bikes</p>
              </div>
              <div className="row">
                <h2 className="text-2xl font-medium w-fit border-b-2 border-teal-300">Who is the Web Developer?</h2>
                <p className="pt-6">The web developer is a specialist in IT software that programming for Web or Web application. The website consists of 3 levels. Based on the size of the team and development model, the web developer may work at one level or all three levels. The web developer that works on the logic and data layer on the spine of any web site.</p>
                <p className="pt-6">Web development en compasses a wide range of services, which include delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures, QA testing, maintenance, consulting, and even a custom CMS.</p>
              </div>
            </div>
            <div className="max-md:mx-auto max-w-96 md:ml-4 md:flex-1 max-md:mb-16">
              <img loading="lazy" className="rounded shadow-2xl dark:shadow-white/20" src={require("../static/images/admin.png")} alt="admin" />
            </div>
          </div>
          <div className="pt-16">
            <h3 className="text-lg">Importance of developing the time:</h3>
            <ul className="pt-6">
              {listArr?.map(({ head, p }, index) => (
                <li key={index} className="pb-6">
                  <h4 className="pb-2">{head}</h4>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </Box>
  );
};