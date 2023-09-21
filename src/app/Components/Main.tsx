// Main.js
import React from "react";
import CodeEditor from "./CodeEditor";
import { BsArrowRight } from 'react-icons/bs';

export default function Main(props: any) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white flex-grow px-10 py-3 max-h-full overflow-y-auto">
      <h1 id="introduction" className="mx-8 mt-8 font-sans text-white transition-colors duration-300 ease-in-out group-hover:text-blue-500">
        {props.child}
      </h1>
      <p className="mt-6 mx-8 text-white">
        {props.content}
      </p>

    </div>
  );
}
