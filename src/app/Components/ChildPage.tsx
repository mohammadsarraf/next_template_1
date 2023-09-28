'use client'
import React, { useState } from "react";
import Menu from "./Menu";
import Main from "./Main";
import jsonData from "../../../data.json"
import Installation from "../Chats/Installation";



export default function ChildPage(props: any) {
    
    const [selectedChild, setSelectedChild] = useState<string | null>(null); // State to store the selected child
    
    // Callback function to receive the selected child from Menu
    const handleSelectedChild = (childKey: string | null) => {
        setSelectedChild(childKey);
    };
    
    return (

        <div className="h-full flex overflow-y-hidden">
            <Menu buttons={props.topics}/>
            {/* <div className="text-white flex-grow px-10 py-11 max-h-full overflow-y-auto">
                <p>{props.content}</p>
            </div> */}
            <Installation />
        </div>
    );
}