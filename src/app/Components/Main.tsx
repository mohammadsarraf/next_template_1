import React from "react";

interface MainProps {
  name: string; // Specify the type of the 'name' prop
}

export default function Main({ name }: MainProps) {
  return (
    <div className=" text-white flex-grow px-10 py-3">

    <h1 className="mx-8 mt-8 font-sans text-white transition-colors duration-300 ease-in-out group-hover:text-blue-500">
        Introduction
    </h1>
    <p className="mt-6 mx-8">
        Welcome to Nextra! This is a basic docs template. You can use it as a starting point for your own project</p>

    <div className="group"> 

      <h1 className="mx-8 mt-4 font-bold">
         What is Nextra 
         </h1>

      <p className="mt-6 mx-8"> 
      a simple, powerful and flexible site generation framework with everything you love from Next.js
       </p>

      </div> 

      <div className="group"> 
      <h1 className="mt-6 mx-8 bold"> 
                Documentation 
      </h1>
      <p className="mx-8 mt-6"> 
          The documentation is abailable at
          <a href="www.google.com"> https://nextra.site</a>
      </p>
      </div> 

      <div className="group mx-8 mt-8"> 
      <p className="text-right text-sm text-gray-500">First created 2023-09-13</p>
      <h1> </h1>
      </div>

      <div className="flex justify-end items-center mt-8">
        <a title="Another Page" href='https://www.google.com' className="flex items-center space-x-2 text-grey-500 no-underline transition-transform hover:translate-x-2 transform hover:scale-105 duration-300 ease-in-out">
            <span className="text-sm font-bold text-gray-300">Another Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#d7d5cb" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </a>
    </div>

    </div>
  );
}
