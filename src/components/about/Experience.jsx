import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Experience = ({ title, company_name, icon, iconBg, date, points }) => {
  return (
    <VerticalTimelineElement
      date={date}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            className="object-contain w-3/5 rounded-full h-3/5"
            src={icon}
            alt={company_name}
          />
        </div>
      }
      iconStyle={{
        backgroundColor: iconBg,
      }}
      contentStyle={{
        borderBottom: `8px solid ${iconBg}`,
        boxShadow: "none",
      }}
    >
      <h3 className="text-xl font-semibold text-black font-poppins">{title}</h3>
      <p className="font-medium font-base text-black-500">{company_name}</p>

      <ul className="my-5 ml-5 space-y-2 list-disc">
        {points.map((point, pointIndex) => {
          return (
            <li
              key={pointIndex}
              className="pl-1 text-sm font-normal text-black-500/50"
            >
              {point}
            </li>
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

export default Experience;
