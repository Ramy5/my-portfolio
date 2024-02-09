import ProjectSection from "../components/Projects/ProjectSection";
import { projects } from "../constant";
import Cta from "../components/UI/Cta";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="font-semibold blue-gradient_text drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 text-slate-500">
        <p className="leading-7">
          Welcome to my curated projects, each a testament to my passion and
          dedication. These are the gems closest to my heart. Many are
          open-source, inviting collaboration and enhancement ideas. Your input
          is valued! Explore, be inspired, and perhaps embark on a collaborative
          journey with me.
        </p>
      </div>

      <div className="flex flex-wrap gap-16 my-20">
        {projects.map((project, index) => {
          return <ProjectSection key={index} {...project} />;
        })}
      </div>

      <hr className="bg-slate-300" />

      <Cta />
    </section>
  );
};

export default Projects;
