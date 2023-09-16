import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'; // You can choose different styles

export default function CodeEditor() {
 const copyText = () => {
    const codeElement = document.getElementById("code");
    if (codeElement) {
        const range = document.createRange();
        range.selectNode(codeElement);
        const selection = window.getSelection();
        if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        try {
            document.execCommand("copy");
            selection.removeAllRanges();
            alert("Code copied to clipboard!");
        } catch (err) {
            console.error("Unable to copy: ", err);
            alert("Failed to copy code to clipboard.");
        }
        } else {
        alert("Unable to access the selection object.");
        }
    } else {
        alert("Code element not found. Make sure the 'id' attribute is set correctly.");
    }
};
  return (
<div className="border-black bg-[#282a36] rounded-lg  m-5 pb-8">
      <div className="bg-gray-600  rounded-lg text-xs w-full my-2 py-3">
        <p className="text-red-200 px-2">demo.js</p>
        </div>

        <div className="codeEditor flex justify-between"> 
      <SyntaxHighlighter 
      id='code'
      language="javascript" 
      style={dracula}
      customStyle= {{fontSize: '0.875em'}}
      showInlineLineNumbers ={true}      
      >
        {`import React from "react";\nconsole.log('hello world');\nexport default function CodeEditor();`}
        </SyntaxHighlighter>
        <button onClick = {copyText} className="mr-4"> 
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-6 h-6">    
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" 
            />
        </svg>

    </button>
        </div>
        </div>
  );
}
