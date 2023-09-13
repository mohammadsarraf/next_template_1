'use client'
import React, { useRef, useEffect } from "react";
import { FaPiedPiperAlt, FaGithub, FaDiscord } from 'react-icons/fa'

export default function Home() {
	const searchInputRef = useRef<HTMLInputElement | null>(null); // Specify the type as HTMLInputElement | null

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => { // Specify the type as KeyboardEvent
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

	return (
		<nav className="flex w-screen h-20 py-3 px-10 border-b border-gray-700 justify-between">
			<div>
				<FaPiedPiperAlt className={`text-white h-10 w-10`} />
			</div>
			<div className="flex items-center space-x-4 text-white">
				<div>About</div>
				<div>Contact ↗</div>
				<div className="relative">
					<input
						ref={searchInputRef}
						type="text"
						className="bg-gray-900 h-10 px-5 pr-10 rounded-md text-sm focus:outline-none w-64 text-white"
						placeholder="Search documentation..."
					/>
					<span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xs">CNTL K</span>
				</div>
				<FaGithub className={`text-white h-10 w-10`} />
				<FaDiscord className={`text-white h-10 w-10`} />
			</div>
		</nav>
	);
}
