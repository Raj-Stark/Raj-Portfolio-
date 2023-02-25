import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import redux from "../assets/react-redux.png";
import styled from "../assets/styled.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const TechStack = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-white",
    },
    {
      id: 7,
      src: styled,
      title: "Styled Components",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto sm:pt-20 pt-10 "
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/* <div>
          <p className="text-4xl font-bold  uppercase  border-gray-500 font-signature ">
            Portfolio
          </p>
         
        </div> */}

        <div className=" h-14 sm:h-20 pl-4 bg-black  flex items-center shadow-md  shadow-gray-600 ">
          <p className="text-2xl sm:text-4xl font-bold  uppercase  border-gray-500 font-signature ">
            Experience
          </p>
        </div>
        <p className="py-6">These are the technologies I've worked with</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
