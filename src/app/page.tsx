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
				<Main name={``} />
				<Info />
			</main>
			<footer className="">
				<p className="text-white p-4">Lilglu4e Productions</p>
			</footer>
		</div>
	)
}

