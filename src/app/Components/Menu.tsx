

import React, { useState, useEffect, useRef } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { RxHamburgerMenu } from 'react-icons/rx'

interface Button {
	Topic: string;
	Children: { key: string; value: string }[];
	key: string;
}

const initialButtons: Button[] = [
	{
		Topic: "Getting Started",
		key: "Introduction",
		Children: [
			{ key: "1", value: "Installation" },
			{ key: "2", value: "Editor Setup" },
			{ key: "3", value: "Using with Preprocessors" },
			{ key: "4", value: "Optimizing for Production" },
			{ key: "5", value: "Browser Support" },
			{ key: "6", value: "Upgrade Guide" },
		],
	},
	{
		Topic: "Core Concepts",
		key: "Core Concepts",
		Children: [
			{ key: "1", value: "Utility-First Fundamentals" },
			{ key: "2", value: "Handling Hover, Focus, and Other States" },
			{ key: "3", value: "Responsive Design" },
			{ key: "4", value: "Dark Mode" },
			{ key: "5", value: "Adding Custom Styles" },
			{ key: "6", value: "Functions & Directives" },
		],
	},
	{
		Topic: "Customization",
		key: "Customization",
		Children: [
			{ key: "1", value: "Configuration" },
			{ key: "2", value: "Content" },
			{ key: "3", value: "Theme" },
			{ key: "4", value: "Screens" },
			{ key: "5", value: "Colors" },
			{ key: "6", value: "Spacing" },
			{ key: "7", value: "Plugins" },
			{ key: "8", value: "Presets" },
		],
	},
];

export default function Menu() {
	const [buttons, setButtons] = useState<Button[]>(initialButtons);
	const [selectedButton, setSelectedButton] = useState<string | null>(null);
	const [selectedChild, setSelectedChild] = useState<string | null>(null);
	const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
	const [selectedTheme, setSelectedTheme] = useState("light");
	const [isEditing, setIsEditing] = useState(false);
	const [changesMade, setChangesMade] = useState(false);
	const searchInputRef = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.key === 'k') {
				e.preventDefault();
				if (searchInputRef.current) {
					searchInputRef.current.focus();
				}
			}
		};

		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, []);
	const handleButtonClick = (buttonName: string, childKey: string | null) => {
		setSelectedButton(buttonName);
		setSelectedChild(childKey);
	};

	const toggleThemeDropdown = () => {
		setIsThemeDropdownOpen(!isThemeDropdownOpen);
	};

	const handleThemeChange = (theme: string) => {
		setSelectedTheme(theme);
		toggleThemeDropdown();
	};

	const toggleEditing = () => {
		setIsEditing(!isEditing);
		setChangesMade(false);
	};

	const onDragEnd = (result: any) => {
		if (!result.destination) {
			return;
		}

		const { source, destination } = result;
		const updatedButtons = [...buttons];

		if (source.droppableId === "buttons" && destination.droppableId === "buttons") {
			const sourceButtonIndex = source.index;
			const destButtonIndex = destination.index;

			const [movedButton] = updatedButtons.splice(sourceButtonIndex, 1);
			updatedButtons.splice(destButtonIndex, 0, movedButton);
			setChangesMade(true);
		}

		setButtons(updatedButtons);
	};

	const handleDoneClick = () => {
		setChangesMade(false);
		setIsEditing(false);
	};

	return (
		<div className="flex flex-col flex-1 px-10 py-3 relative h-full">
			<div className="relative my-8">
				<input
					ref={searchInputRef}
					type="text"
					className="bg-gray-800 text-white placeholder-gray-400 h-10 px-4 py-2 pr-10 rounded-md text-sm focus:outline-none w-64"
					placeholder="Search documentation..."
				/>
				<span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">
					{`CNTL K`}
				</span>
			</div>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="buttons" isDropDisabled={!isEditing}>
					{(provided) => (
						<div className={`overflow-auto pr-3`} ref={provided.innerRef} {...provided.droppableProps}>
							{buttons.map((button, index) => (
								<Draggable
									key={button.key}
									draggableId={button.key}
									index={index}
									isDragDisabled={!isEditing}
								>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											className={`flex flex-col my-3 ${snapshot.isDragging ? "opacity-50" : ""}`}
										>
											<div className="flex items-center justify-between">

												<p
													className={`text-white text-xs font-bold ${selectedButton === button.key ? "text-blue-600" : ""}`}
													onClick={() => handleButtonClick(button.key, null)}
												>
													{button.Topic}
												</p>
												<div
													{...provided.dragHandleProps}
													className={`text-gray-500 cursor-pointer ${isEditing ? "" : "hidden"}`}
												>
													<RxHamburgerMenu />
												</div>
											</div>

											<div className="flex flex-col my-2">
												{button.Children.map((child) => (
													<button
														key={child.key}
														className={`text-xs text-bold whitespace-nowrap text-left p-2 pl-4 border-l rounded-e-md hover:border-l-gray-600 ${selectedButton === button.key && selectedChild === child.key ? "text-blue-600 border-l-blue-600" : "text-gray-300"}`}
														onClick={() => handleButtonClick(button.key, child.key)}
													>
														{child.value}
													</button>
												))}
											</div>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
			{isEditing ? (
				<button
					className={`bg-green-600 text-white px-2 py-1 rounded-md mt-4`}
					onClick={handleDoneClick}
				>
					Done
				</button>
			) : (
				<button
					className={`bg-blue-600 text-white px-2 py-1 rounded-md mt-4 ${isEditing ? "hidden" : ""}`}
					onClick={toggleEditing}
				>
					Edit
				</button>
			)}
		</div>
	);
}
