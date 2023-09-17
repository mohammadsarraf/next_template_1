'use client'
// Home.js
import React from "react";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Main from "./Components/Main";
import Info from "./Components/Info";

export default function Home() {
	return (
		<div>
			<div className="max-h-screen flex flex-col">
				<Navbar />
				<div className="flex-grow flex max-h-screen overflow-y-hidden">
					<Menu />
					<Main />
					<Info />
				</div>
			</div>
			<footer className="text-white p-4">Lilglu4e Productions</footer>
		</div>

	);
}


