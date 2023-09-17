import React from "react";

interface InfoProps {
  // Define any props here if needed
}

export default function Info(props: InfoProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col text-white w-72 px-10 py-3">
      <p className="text-lg">On this Page</p>
      <ul>
        <li>
          <a href="#introduction" onClick={(e) => handleLinkClick(e, "introduction")}>
            Introduction
          </a>
        </li>
        <li>
          <a href="#what-is-nextra" onClick={(e) => handleLinkClick(e, "what-is-nextra")}>
            What is Nextra
          </a>
        </li>
        <li>
          <a href="#documentation" onClick={(e) => handleLinkClick(e, "documentation")}>
            Documentation
          </a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}
