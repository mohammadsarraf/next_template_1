import React from "react";

export default function Menu() {
    return (
        <div className="flex flex-col w-72 px-10 py-3">
            <button className="text-blue-400 text-left text-md text-bold p-1 py-2 rounded-md hover:bg-blue-100 hover:bg-opacity-10">Introduction</button>
            <button className="text-blue-400 text-left text-md text-bold p-1 py-2 rounded-md hover:bg-blue-100 hover:bg-opacity-10">Another Page</button>
            <button className="text-blue-400 text-left text-md text-bold p-1 py-2 rounded-md hover:bg-blue-100 hover:bg-opacity-10">Advanced (A Folder )</button>
        </div>
    );
}
