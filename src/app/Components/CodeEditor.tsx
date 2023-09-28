// CodeEditor.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
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
    <div className="bg-[#1e1e1e] rounded-lg m-5 pt-1 pb-8">
      <div className="flex bg-[#1e1e1e] rounded-t-md text-xs w-full outline-none pt-1 justify-between">
        <p className="text-blue-500 border-b border-b-blue-500 border-r-blue-500 outline-none m-0 p-2">
          demo.js
        </p>
        <div className="flex flex-row-reverse rounded-tl-sm flex-grow border-t border-t-[#3e3e3e] border-l border-l-[#3e3e3e] bg-[#3e3e3e89]">
          <button onClick={copyText} className="mr-4">
            <BsClipboard />
          </button>
        </div>
      </div>


      <div className="codeEditor flex justify-between">
        <SyntaxHighlighter
          id="code"
          language="javascript"
          style={vscDarkPlus}
          customStyle={{ fontSize: "0.875em" }}
          showInlineLineNumbers={true}
        >
          {`import React from "react";\nconsole.log('hello world');\nexport default function CodeEditor();`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
