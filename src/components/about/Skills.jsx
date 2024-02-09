import React from "react";

const Skills = ({ imageUrl, name }) => {
  return (
    <div className="w-14 h-14 md:w-20 md:h-20 block-container">
      <div className="btn-back rounded-xl" />
      <div
        className="flex items-center justify-center cursor-pointer btn-front rounded-xl"
        title={name}
      >
        <img src={imageUrl} alt={name} className="object-contain w-1/2 h-1/2" />
      </div>
    </div>
  );
};

export default Skills;
