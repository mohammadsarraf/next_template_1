'use client'
import React from "react";
import Navbar from "../Components/Navbar";
import ChildPage from "../Components/ChildPage";
import jsonData from '../../../data.json';
import Installation from "./Installation";
import CodeEditor from "../Components/CodeEditor";
import Menu from "../Components/Menu";

const modifiedTopics = jsonData.map((topic) => ({
    ...topic,
    Children: topic.Children.map(({ key, value, content }) => ({ key, value, content })),
}));
export default function Chats() {
    return (
        <div className="flex flex-col h-screen ">
             <Navbar />
             {/* <Menu /> */}
            <ChildPage
                topics={modifiedTopics}
                content={`Welcome to HomePAGE!`}
            />
            
            {/* <CodeEditor/> */}
        </div>
    )
}
