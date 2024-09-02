import React from "react";
import Aboutimg from "../assets/WhatsApp Image 2024-08-22 at 20.18.28_312ea3e6.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="aboutme">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
            src={Aboutimg}
            alt=""
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I have Dedicated banking experience more than 3 years in
              client-facing roles at Rupali bank ltd.I am handling customer
              transactions, cross-selling bank products, and keeping customers
              happy by providing a professional and efficient service. A strict
              and safe deposit box operations and guidelines, and processed
              customer transactions daily.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Ms word
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-t from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Excel
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-t from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Ms Power Point
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-t from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                </div>
              </div>
              <div className="mt-12 flex justify-between text-center">
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    5+
                  </h3>
                  <p>Total Year of Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    3+yr
                  </h3>
                  <p>Assistant Officer,Rupali Bank Ltd</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    2yr
                  </h3>
                  <p>General Banking</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    0.5yr
                  </h3>
                  <p>Cash Handing</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    0.2yr
                  </h3>
                  <p> Remittance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
