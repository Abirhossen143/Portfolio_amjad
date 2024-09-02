import React from "react";
import Amjadimg from "../assets/WhatsApp Image 2024-08-22 at 20.18.28_312ea3e6.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={Amjadimg}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform divide-neutral-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        {`I'm`}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          MD.Amjad Hossen
        </span>
        ,Banker
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I Specialised in General Banking
      </p>
      <div className="mt-8 space-x-4 ">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full ">
          Contact With Me
        </button>
        <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resune
        </button>
      </div>
    </div>
  );
};

export default Hero;
