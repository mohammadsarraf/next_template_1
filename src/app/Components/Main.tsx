// Main.js
import React from "react";
import CodeEditor from "./CodeEditor";
import { BsArrowRight } from 'react-icons/bs';

export default function Main() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white flex-grow px-10 py-3 overflow-y-scroll">
      <h1 id="introduction" className="mx-8 mt-8 font-sans text-white transition-colors duration-300 ease-in-out group-hover:text-blue-500">
        Introduction
      </h1>
      <p className="mt-6 mx-8">
        Welcome to Nextra! This is a basic docs template. You can use it as a starting point for your own project
      </p>

      <div className="group">
        <h1 id="what-is-nextra" className="mx-8 mt-4 font-bold">
          What is Nextra
        </h1>
        <p className="mt-6 mx-8">
          A simple, powerful, and flexible site generation framework with everything you love from Next.js
        </p>
      </div>

      <div id="documentation" className="group">
        <h1 className="mt-6 mx-8 bold">
          Documentation
        </h1>
        <p className="mx-8 mt-6">
          The documentation is available at <a href="www.google.com">https://nextra.site</a>
        </p>
        <div className="px-10 py-3">
          <CodeEditor />
        </div>
      </div>

      <div className="group mx-8 mt-8">
        <p className="text-right text-sm text-gray-500">First created 2023-09-13</p>
      </div>

      <div className="flex justify-end items-center mt-8 hover:cursor-pointer">
        <span className="text-sm font-bold text-gray-300">Another Page</span>
        <BsArrowRight className={`text-white ml-3`} />
      </div>
    </div>
  );
}
