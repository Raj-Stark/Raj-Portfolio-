import React from "react";
import rjStore from "../assets/portfolio/rjStore.png";
import rjJobs from "../assets/portfolio/rjJobs.png";

import rjPix from "../assets/portfolio/rjPix.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: rjStore,
      name: "RJ Store",
      desc: "It is a E-Commerce Furniture Selling App ,in which a user can sort products using various filters based on price,colors,company etc.",
      bgImage: "./assets/portfolio/rjStore.png",
      techStack: "HTML , CSS , Javascript , React JS , Styled Components",
      liveLink: "https://rj-furniture-store.netlify.app",
      codeLink: "https://github.com/Raj-Stark/Rj-Store",
    },
    {
      id: 2,
      src: rjJobs,
      name: "Jobster",
      desc: "It is Dummy Job Application app , which is based upon `CRUD operations`, User can create,read,update & delete jobs as per choice",
      bgImage: "./assets/portfolio/rjJobs.png",
      techStack:
        "HTML , CSS , Javascript , React JS , Styled Components , Redux",
      liveLink: "https://rj-jobs.netlify.app/landing",
      codeLink: "https://github.com/Raj-Stark/Job-Listing-Website",
    },
    {
      id: 3,
      src: rjPix,
      name: "RJ Pix",
      desc: "It is a Unpsplash Clone website , Using unspalsh Api in the backend , It has features like unlimited scroll and user can search any image he wants .",
      bgImage: "./assets/portfolio/rjPix.png",
      techStack: "HTML , CSS , Javascript , React JS , Tailwind Css",
      liveLink: "https://rajpix.netlify.app/",
      codeLink: "https://github.com/Raj-Stark/Unsplash-API",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-auto "
    >
      <div className=" max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="h-20 pl-4 bg-black  flex items-center shadow-md  shadow-gray-600 ">
          <p className="text-4xl font-bold  uppercase  border-gray-500 font-signature ">
            Portfolio
          </p>
        </div>
        <p className="py-6">Check out some of my work right here</p>

        <div className="mt-20 flex flex-col gap-14">
          {portfolios.map(
            ({ id, src, name, desc, techStack, liveLink, codeLink }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg h-auto md:h-96 w-full flex flex-col md:flex-row gap-2 md:gap-4 p-2 md:p-4"
              >
                <div
                  className={`w-full md:h-full  md:bg-none bg-no-repeat bg-center bg-cover cursor-pointer  md:w-2/3 rounded-l-lg`}
                >
                  <img
                    src={src}
                    alt=""
                    className="rounded-md h-full w-full  object-contain md:object-cover"
                  />
                </div>
                <div className=" flex flex-col justify-between gap-2  h-full w-full p-4 ">
                  <div>
                    <h1 className=" text-2xl md:text-4xl font-semibold mb-2 text-transparent  bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500">
                      {name}
                    </h1>
                    <hr />

                    <p className=" text-lg md:text-xl  my-4">{desc}</p>

                    <h2 className="text-xl md:text-2xl font-semibold inline-block  text-transparent  bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500 ">
                      Tech Stack :{" "}
                    </h2>
                    <p>{techStack}</p>
                  </div>

                  <div className="w-full flex justify-between mt-4">
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className=" inline-block px-6 py-1  rounded-sm text-center font-semibold  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
                    >
                      <button>Live Link</button>
                    </a>
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className=" inline-block px-6 py-1 rounded-sm text-center font-semibold  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                    >
                      <button>Github Link</button>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
