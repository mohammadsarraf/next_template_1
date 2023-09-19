'use client'
import Head from "next/head";
import React from "react";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import Main from "../Components/Main";

export default function Chats() {
    return (
        <div className="flex flex-col h-screen ">
            <Navbar />
            <div className="h-full flex overflow-y-hidden">
                <Menu />
                <Main />
            </div>
        </div>
    )
}
