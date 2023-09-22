
import React, { useState } from "react";
import Menu from "./Menu";
import Main from "./Main";

interface Topics {
    Topic: string;
    Children: { key: string; value: string, content: string }[];
    key: string;
}


const initialTopics: Topics[] = [
    {
        Topic: "Getting Started",
        key: "Introduction",
        Children: [
            { key: "1", value: "Installation", content: "Hello1" },
            { key: "2", value: "Editor Setup", content: "Hello2" },
            { key: "3", value: "Using with Preprocessors", content: "Hello3" },
            { key: "4", value: "Optimizing for Production", content: "Hello4" },
            { key: "5", value: "Browser Support", content: "Hello5" },
            { key: "6", value: "Upgrade Guide", content: "Hello6" },
        ],
    },
    {
        Topic: "Core Concepts",
        key: "Core Concepts",
        Children: [
            { key: "1", value: "Utility-First Fundamentals", content: "Hello1" },
            { key: "2", value: "Handling Hover, Focus, and Other States", content: "Hello1" },
            { key: "3", value: "Responsive Design", content: "Hello1" },
            { key: "4", value: "Dark Mode", content: "Hello1" },
            { key: "5", value: "Adding Custom Styles", content: "Hello1" },
            { key: "6", value: "Functions & Directives", content: "Hello1" },
        ],
    },
    {
        Topic: "Customization",
        key: "Customization",
        Children: [
            { key: "1", value: "Configuration", content: "Hello1" },
            { key: "2", value: "Content", content: "Hello1" },
            { key: "3", value: "Theme", content: "Hello1" },
            { key: "4", value: "Screens", content: "Hello1" },
            { key: "5", value: "Colors", content: "Hello1" },
            { key: "6", value: "Spacing", content: "Hello1" },
            { key: "7", value: "Plugins", content: "Hello1" },
            { key: "8", value: "Presets", content: "Hello1" },
        ],
    },
];

const modifiedTopics: Topics[] = initialTopics.map((topic) => ({
    ...topic,
    Children: topic.Children.map(({ key, value, content }) => ({ key, value, content })),
}));

export default function ChildPage() {
    const [selectedChild, setSelectedChild] = useState<string | null>(null); // State to store the selected child
    console.log(selectedChild)
    // Callback function to receive the selected child from Menu
    const handleSelectedChild = (childKey: string | null) => {
        setSelectedChild(childKey);
    };
    return (
        <div className="h-full flex overflow-y-hidden">
            <Menu buttons={modifiedTopics} selectedChildCallback={handleSelectedChild} selectedChild="Installation" />
            <div className="text-white flex-grow px-10 py-11 max-h-full overflow-y-auto">
                <h1>Welcome Page</h1>
            </div>
            {/* {modifiedTopics.map((topic) => (
				<div key={topic.key}>
					{topic.Children.map((child) => (
						<Main key={child.key} child={child.value} content={child.content} />
					))}
				</div>
			))} */}
        </div>
    );
}