import { skills, experiences } from "../constant";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Experience from "../components/about/Experience";
import Skills from "../components/about/Skills";
import Cta from "../components/UI/Cta";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="font-semibold blue-gradient_text drop-shadow">
          Ramy
        </span>
      </h1>

      <div className="mt-5 text-slate-500">
        <p className="leading-7">
          Experienced Front-End Developer with one year of hands-on expertise,
          passionate about JavaScript and Next.js, equipped with a diverse skill
          set including HTML, CSS, Pug, Sass, Gulp, Jest, React, Tailwind CSS,
          React query, daisy Ui, material Ui, TypeScript, OOP, MVC design
          pattern, Git, and GitHub. Demonstrating expertise through a robust
          portfolio of over 30 projects on GitHub, I have consistently delivered
          outstanding web solutions. Driven by a commitment to personal and
          professional growth, I aspire to transition into a fullstack developer
          role. Actively seeking opportunities to further enhance my skills and
          contribute to innovative projects, I am dedicated to building a
          successful career in the dynamic tech industry.
        </p>
      </div>

      <div className="flex flex-col py-16">
        <h3 className="subhead-text">Skills</h3>

        {/* SKILLS */}
        <div className="flex flex-wrap gap-6 md:gap-8 mt-6">
          {skills.map((skill, index) => {
            return <Skills {...skill} key={index} />;
          })}
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>

          {/* EXPERIENCE */}
          <div className="mt-8">
            <VerticalTimeline>
              {experiences.map((exp, index) => {
                return <Experience {...exp} key={index} />;
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* CTA */}
      <Cta />
    </section>
  );
};

export default About;
