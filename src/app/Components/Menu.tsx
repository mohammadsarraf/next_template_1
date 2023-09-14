import React, { useState, useRef } from "react";

export default function Menu() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState("light"); // Default theme

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const toggleThemeDropdown = () => {
        setIsThemeDropdownOpen(!isThemeDropdownOpen);
    };

    const handleThemeChange = (theme) => {
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
                    className={`text-white text-md text-bold text-left p-2 mb-1 rounded-md bg-transparent`}
                    onClick={toggleThemeDropdown}
                >
                    Theme: {selectedTheme}
                </button>
                {isThemeDropdownOpen && (
                    <div className="flex flex-col-reverse absolute bottom-10 mt-2 w-64">
                        <ul className={`text-md text-bold text-left p-2 mb-1 rounded-md bg-gray-700`}>
                            <li
                                className={`text-md text-bold text-left p-2 mb-1 rounded-md bg-gray-700`}
                                onClick={() => handleThemeChange("light")}
                            >
                                Light
                            </li>
                            <li
                                className={`text-md text-bold text-left p-2 mb-1 rounded-md bg-gray-700`}
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
