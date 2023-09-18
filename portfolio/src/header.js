import React, { useState } from "react";
import Logo from "./images/icons/logo.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="min-h-screen">
      <nav className="flex  flex-wrap p-6 bg-neutral-800 justify-center items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <img
            src={Logo}
            className="h-20 rounded-full object-cover bg-white"
            alt="logo de mon site internet"
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-white-500 hover:text-white-400"
            alt="menu de navigation"
          >
            <svg
              className={`fill-white h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-white h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`flex  lg:flex lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="text-sm">
            <a
              href="./images/cv/CV.pdf" download="CV.pdf"
              className="block mt-4 lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8 mr-4"
            >
              Mon CV
            </a>
            <a
              href="#Projets"
              className="block mt-4 lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8 mr-4"
            >
              Mes projets
            </a>
            <a
              href="#Compétences"
              className="block mt-4 lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8 mr-4"
            >
              Mes compétences
            </a>
            <a
              href="#Contact"
              className="block mt-4 lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8 mr-4"
            >
              Me contacter
            </a>
          </div>
          <div></div>
        </div>
      </nav>
      <div className="h-screen bg-gradient-to-r from-cyan-500 to-teal-500">
        <div className="h-screen flex justify-center items-center">
          <h1 className="text-7xl text-center text-white">
            Bienvenue sur mon site
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
