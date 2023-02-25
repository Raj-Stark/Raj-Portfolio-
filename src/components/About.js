import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" h-14 sm:h-20 pl-4 bg-black  flex items-center shadow-md shadow-gray-600 ">
          <p className="text-2xl sm:text-4xl font-bold  border-gray-500 font-signature">
            ABOUT
          </p>
        </div>

        <div className="pl-2">
          <p className=" text-base sm:text-lg mt-8">
            All I know is one thing is that Coding is something that triggers my
            soul. I have started my journey through Java after solving some
            basics problems into Java, I gain some confidence in programming.
            Later on I started learning HTML,CSS , made 4-5 landing pages .
            After that I came to know about "Frontend Development" in a more
            mature way . Learned Javascript , React Js and guess what ? I fall
            in love completely with React Js . Want to make more and more
            projects into it.
          </p>

          <br />

          <p className="text-base sm:text-lg">
            I don't call myself a good programmer or a bad one rather I love to
            see myself as an evolving programmer . Who keep on learning with the
            same intent, the same energy, and the same discipline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
