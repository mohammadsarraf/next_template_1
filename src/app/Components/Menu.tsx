import React, { useState, useRef } from "react";

export default function Menu() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState("light"); // Default theme

    const handleButtonClick = (buttonName: any) => {
        setSelectedButton(buttonName);
    };

    const toggleThemeDropdown = () => {
        setIsThemeDropdownOpen(!isThemeDropdownOpen);
    };

    const handleThemeChange = (theme: any) => {
        setSelectedTheme(theme);
        toggleThemeDropdown();
    };

    const themeButtonRef = useRef(null);

    return (
        <div className="flex flex-col w-80 px-10 py-3 relative">
            <div className="flex flex-col flex-grow border-b border-gray-500">
                <button
                    className={`text-md text-bold text-left p-2 mb-1 rounded-md hover:bg-blue-100 hover:bg-opacity-10 ${selectedButton === "Introduction"
                        ? "text-blue-600 bg-opacity-20 bg-blue-400 hover:bg-blue-400 hover:bg-opacity-20"
                        : "text-white "
                        }`}
                    onClick={() => handleButtonClick("Introduction")}
                >
                    Introduction
                </button>
                <button
                    className={`text-md text-bold text-left p-2 mb-1 rounded-md hover:bg-blue-100 hover:bg-opacity-10 ${selectedButton === "Another Page"
                        ? "text-blue-600 bg-opacity-20 bg-blue-400 hover:bg-blue-400 hover:bg-opacity-20"
                        : "text-white "
                        }`}
                    onClick={() => handleButtonClick("Another Page")}
                >
                    Another Page
                </button>
                <button
                    className={`text-md text-bold text-left p-2 mb-1 rounded-md hover:bg-blue-100 hover:bg-opacity-10 ${selectedButton === "Advanced (A Folder)"
                        ? "text-blue-600 bg-opacity-20 bg-blue-400 hover:bg-blue-400 hover:bg-opacity-20"
                        : "text-white "
                        }`}
                    onClick={() => handleButtonClick("Advanced (A Folder)")}
                >
                    Advanced (A Folder)
                </button>
            </div>
            <div className="flex flex-col relative">
                <button
                    ref={themeButtonRef}
                    className={`text-white text-opacity-50 bg-gray-400 bg-opacity-10 text-sm text-bold text-left p-2 my-1 mt-2 rounded-md bg-transparent hover:text-white`}
                    onClick={toggleThemeDropdown}
                >
                    Dark
                </button>
                {isThemeDropdownOpen && (
                    <div className="flex flex-col-reverse absolute bottom-9 mb-1 w-64">
                        <ul className={`text-md text-bold text-left p-2 mb-1 rounded-md  bg-[#141414]`}>
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
            </div>
        </div>
    );
}
