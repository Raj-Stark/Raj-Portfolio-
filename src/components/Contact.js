import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-auto md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full">
        <div className=" h-14 sm:h-20 pl-4 bg-black  flex items-center shadow-md  shadow-gray-600 ">
          <p className="text-2xl sm:text-4xl font-bold  uppercase  border-gray-500 font-signature ">
            Contact
          </p>
        </div>
        <p className="py-6">Submit the form below to get in touch with me</p>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/d9e55eae-c0de-4aad-b890-96d485d14747"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
