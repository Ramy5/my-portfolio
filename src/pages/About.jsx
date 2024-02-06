import { skills } from "../constant";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm
        <span className="blue-gradient_text font-semibold drop-shadow">
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

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Skills</h3>

        <div className="flex flex-wrap gap-12 mt-6">
          {skills.map((skill) => {
            const {imageUrl, name} = skill

            return <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"/>
              <div className="flex btn-front justify-center items-center cursor-pointer rounded-xl" title={name}>
                <img src={imageUrl} alt={name} className="w-1/2 h-1/2 object-contain"/>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
