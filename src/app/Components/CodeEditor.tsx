// CodeEditor.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BsClipboard } from "react-icons/bs";

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
            alert(
                "Code element not found. Make sure the 'id' attribute is set correctly."
            );
        }
    };

    return (
        <div className="border-black bg-[#282a36] rounded-lg m-5 pb-8">
            <div className="bg-gray-600 rounded-t-lg text-xs w-full my-2 py-3">
                <p className="text-white px-2">demo.js</p>
            </div>

            <div className="codeEditor flex justify-between">
                <SyntaxHighlighter
                    id="code"
                    language="javascript"
                    style={dracula}
                    customStyle={{ fontSize: "0.875em" }}
                    showInlineLineNumbers={true}
                >
                    {`import React from "react";\nconsole.log('hello world');\nexport default function CodeEditor();`}
                </SyntaxHighlighter>
                <button onClick={copyText} className="mr-4">
                    <BsClipboard />
                </button>
            </div>
        </div>
    );
}
