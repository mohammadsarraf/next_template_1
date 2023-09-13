'use client'
import React from "react";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Main from "./Components/Main";
import Info from "./Components/Info";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex flex-grow">
				<Menu />
				<Main />
				<Info />
			</main>
			<footer className="py-4">
				<p className="text-white">Lilglu4e Productions</p>
			</footer>
		</div>
	)
}

