import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../../assets/icons";

const ProjectSection = ({ link, description, name, theme, iconUrl }) => {
  return (
    <div className="w-full lg:w-[400px]">
      <div className="block-container w-12 h-12">
        <div className={`btn-back rounded-xl ${theme}`} />
        <div className="btn-front rounded-xl flex justify-center items-center">
          <img
            src={iconUrl}
            alt={name}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-2xl font-semibold font-poppins">{name}</h4>
        <p className="mt-2 text-slate-500">{description}</p>
        <div className="flex items-center gap-2 font-poppins mt-5">
          <Link
            className="text-blue-600 font-semibold"
            to={link}
            target="_blank"
          >
            Live Link
          </Link>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
