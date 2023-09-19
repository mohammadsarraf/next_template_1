import React, { useState, useRef } from "react";

interface Button {
  Topic: string;
  Children: { key: string; value: string }[];
  key: string;
}

const buttons: Button[] = [
  {
    Topic: "Getting Started",
    key: "Introduction",
    Children: [
      { key: "1", value: 'Installation' },
      { key: "2", value: 'Editor Setup' },
      { key: "3", value: 'Using with Preprocessors' },
      { key: "4", value: 'Optimizing for Production' },
      { key: "5", value: 'Browser Support' },
      { key: "6", value: 'Upgrade Guide' },
    ],
  },
  {
    Topic: "Core Concepts",
    key: "Core Concepts",
    Children: [
      { key: "1", value: 'Utility-First Fundamentals' },
      { key: "2", value: 'Handling Hover, Focus, and Other States' },
      { key: "3", value: 'Responsive Design' },
      { key: "4", value: 'Dark Mode' },
      { key: "5", value: 'Adding Custom Styles' },
      { key: "6", value: 'Functions & Directives' },
    ],
  },
];

export default function Menu() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("light");

  const handleButtonClick = (buttonName: string, childKey: string) => {
    setSelectedButton(buttonName);
    setSelectedChild(childKey); // Set the selected child for the button
  };

  const toggleThemeDropdown = () => {
    setIsThemeDropdownOpen(!isThemeDropdownOpen);
  };

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
    toggleThemeDropdown();
  };

  const themeButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="flex flex-col flex-1 px-10 py-3 relative h-full">
      <div className="relative my-8">
        <input
          // ref={searchInputRef}
          type="text"
          className="bg-gray-800 text-white placeholder-gray-400 h-10 px-4 py-2 pr-10 rounded-md text-sm focus:outline-none w-64"
          placeholder="Search documentation..."
        />
        <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">
          {/* <FaSearch className="text-lg" /> */}{`CNTL K`}
        </span>
      </div>
      <div className="flex flex-col flex-grow border-gray-500 max-h-full overflow-y-auto">
        {buttons.map((button) => (
          <div className={`flex flex-col my-3`} key={button.key}>
            <p className="text-white text-xs font-bold">{button.Topic}</p>
            <div className="flex flex-col my-2">
              {button.Children.map((child) => (
                <button
                  key={child.key}
                  className={`text-xs text-bold whitespace-nowrap text-left p-2 pl-4 border-l rounded-e-md hover:bg-blue-100 hover:bg-opacity-10 ${selectedButton === button.key && selectedChild === child.key
                    ? "text-blue-600 border-l-blue-600"
                    : "text-gray-300"
                    }`}
                  onClick={() => handleButtonClick(button.key, child.key)}
                >
                  {child.value}
                </button>
              ))}</div>
          </div>
        ))}
      </div>
    </div>
  );
}



{/* <div className="flex flex-col relative">
        <button
          ref={themeButtonRef}
          className={`text-white text-opacity-50 bg-gray-400 bg-opacity-10 text-sm text-bold text-left p-2 my-1 mt-2 rounded-md bg-transparent hover:text-white`}
          onClick={toggleThemeDropdown}
        >
          Dark
        </button>
        {isThemeDropdownOpen && (
          <div className="flex flex-col-reverse absolute bottom-9 mb-1 w-64">
            <ul className={`text-md text-bold text-left p-2 mb-1 rounded-md bg-[#141414]`}>
              <li
                className={`text-md text-white text-bold text-left p-2 mb-1 rounded-md hover:bg-gray-700 hover:bg-opacity-10`}
                onClick={() => handleThemeChange("light")}
              >
                Light
              </li>
              <li
                className={`text-md text-white text-bold text-left p-2 mb-1 rounded-md hover:bg-gray-700 hover:bg-opacity-10`}
                onClick={() => handleThemeChange("dark")}
              >
                Dark
              </li>
            </ul>
          </div>
        )}
      </div> */}