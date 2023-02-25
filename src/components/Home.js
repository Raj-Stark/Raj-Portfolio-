import React from "react";
import HeroImage from "../assets/raj1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 mt-20 sm:mt-0 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-4 justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2+ years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            <strong> React JS , Redux , Javascript and Tailwind css. </strong>
          </p>

          <div>
            <a
              href="../assets/resume.pdf"
              download="Raj's Resume.pdf"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Download My Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
