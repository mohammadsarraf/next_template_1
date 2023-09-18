'use client'
import React from "react";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Main from "./Components/Main";
import Info from "./Components/Info";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-grow flex min-h-screen">
                <Menu />
                <Main />
                <Info />
            </div>
            <footer className="text-white p-4">Lilglu4e Productions</footer>

        </div>

    );
}
