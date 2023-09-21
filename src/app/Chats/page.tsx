'use client'
import Head from "next/head";
import React from "react";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import Main from "../Components/Main";
import ChildPage from "../Components/ChildPage";
import Link from "next/link";

export default function Chats() {
    return (
        <div className="flex flex-col h-screen ">
            <Navbar />
            <ChildPage />
        </div>
    )
}
