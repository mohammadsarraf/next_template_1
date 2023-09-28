import React from "react";

export default function Installation() {
  return (
    <div className="text-white flex-grow px-10 py-11 max-h-full overflow-y-auto">
      <p className={`text-blue-400`}>Installation</p>
      <h1>Get started with Tailwind CSS</h1>
      <p className={`text-gray-400`}>
        <br />
        {`Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for className names, generating the corresponding styles and then writing them to a static CSS file.`}
        <br /><br />
        {`It's fast, flexible, and reliable — with zero-runtime.`}
      </p>
      <div className="relative z-10">
        <h2 data-docsearch-ignore="true" className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">Installation</h2>
        <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
          <div className="flex-none min-w-full px-4 sm:px-6">
            <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5 mb-px">
              <li>
                <h2>
                  <a className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 text-sky-500 border-current no-underline">Tailwind CLI</a>
                </h2>
              </li>
              <li>
                <h2>
                  <a className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700 no-underline" >Using PostCSS</a>
                </h2>
              </li>
              <li>
                <h2>
                  <a className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700 no-underline" >Framework Guides</a>
                </h2>
              </li>
              <li>
                <h2>
                  <a className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700 no-underline" >Play CDN</a>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative pl-10 xl:grid grid-cols-5 gap-16 ">
        <div className="flex col-span-5 relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style={{ counterIncrement: 'step ' }}>
          <div className="pr-10 col-span-2">
            <h1 className="mb-3">{`Install Tailwind CSS`}</h1>
            <p>{"Install `tailwindcss` via npm, and create your `tailwind.config.js` file."}</p>
          </div>
          <div className="flex-1 relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
            <div className="relative flex text-slate-400 text-xs leading-6">
              <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">Terminal</div>
              <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                <div className="flex-auto -mr-px bg-slate-700/50 border-t border-slate-500/30 rounded-tl">
                </div>
              </div>
              <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                <div className="relative flex -mr-2">
                  <button type="button" className="text-slate-500 hover:text-slate-400">
                    here
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                <code className="flex-none min-w-full p-5">
                  <p className="-mx-5 pl-4 pr-5 border-l-4 border-transparent">
                    {`> npm install -D tailwindcss `}
                  </p>
                  <p className="-mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">
                    {`> npx tailwindcss init`}
                  </p>
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="flex col-span-5 relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style={{ counterIncrement: 'step' }}>
          <div className="pr-10 col-span-2">
            <h1>{`Configure your template paths`}</h1>
            <p>{"Add the paths to all of your template files in your `tailwind.config.js` file."}</p>
          </div>
          <div className="flex-1 relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
            <div className="relative flex text-slate-400 text-xs leading-6">
              <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">tailwind.config.js</div>
              <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                <div className="flex-auto -mr-px bg-slate-700/50 border-t border-slate-500/30 rounded-tl">
                </div>
              </div>
              <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                <div className="relative flex -mr-2">
                  <button type="button" className="text-slate-500 hover:text-slate-400">
                    here
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                <code className="flex-none min-w-full p-5">
                  <p className="-mx-5 pl-4 pr-5 border-l-4 border-transparent">
                    {'/** @type {import(\'tailwindcss\').Config} */'}<br />
                    {'module.exports = {'}<br />
                    &nbsp;&nbsp;&nbsp;{'content: ["./src/**/*.{html,js}"],'}<br />
                    &nbsp;&nbsp;&nbsp;{'theme: {'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'extend: {},'}<br />
                    &nbsp;&nbsp;&nbsp;{'},'}<br />
                    &nbsp;&nbsp;&nbsp;{'plugins: [],'}<br />
                    {'}'}
                  </p>
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="flex col-span-5 relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style={{ counterIncrement: 'step' }}>
          <div className="pr-10 col-span-2">
            <h1>{`Add the Tailwind directives to your CSS`}</h1>
            <p>{"Add the `@tailwind` directives for each of Tailwind's layers to your main CSS file."}</p>
          </div>
          <div className="flex-1 relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
            <div className="relative flex text-slate-400 text-xs leading-6">
              <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">src/input.css</div>
              <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                <div className="flex-auto -mr-px bg-slate-700/50 border-t border-slate-500/30 rounded-tl">
                </div>
              </div>
              <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                <div className="relative flex -mr-2">
                  <button type="button" className="text-slate-500 hover:text-slate-400">
                    here
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                <code className="flex-none min-w-full p-5">
                  <p className="-mx-5 pl-4 pr-5 border-l-4 border-transparent">
                    {'@tailwind base;'}<br />
                    {'@tailwind components;'}<br />
                    {'@tailwind utilities;'}<br />
                  </p>
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="flex col-span-5 relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style={{ counterIncrement: 'step' }}>
          <div className="pr-10 col-span-2">
            <h1>{`Start the Tailwind CLI build process`}</h1>
            <p>{`Run the CLI tool to scan your template files for classes and build your CSS.`}</p>
          </div>
          <div className="flex-1 relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
            <div className="relative flex text-slate-400 text-xs leading-6">
              <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">Terminal</div>
              <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                <div className="flex-auto -mr-px bg-slate-700/50 border-t border-slate-500/30 rounded-tl">
                </div>
              </div>
              <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                <div className="relative flex -mr-2">
                  <button type="button" className="text-slate-500 hover:text-slate-400">
                    here
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                <code className="flex-none min-w-full p-5">
                  <p className="-mx-5 pl-4 pr-5 border-l-4 border-transparent">
                    {`> npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch `}
                  </p>
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="flex col-span-5 relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5" style={{ counterIncrement: 'step' }}>
          <div className="pr-10 col-span-2">
            <h1>{`Start using Tailwind in your HTML`}</h1>
            <p>{"Add your compiled CSS file to the `<head>` and start using Tailwind' s utility classes to style your content."}</p>
          </div>
          <div className="flex-1 relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
            <div className="relative flex text-slate-400 text-xs leading-6">
              <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">src/index.html</div>
              <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                <div className="flex-auto -mr-px bg-slate-700/50 border-t border-slate-500/30 rounded-tl">
                </div>
              </div>
              <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                <div className="relative flex -mr-2">
                  <button type="button" className="text-slate-500 hover:text-slate-400">
                    here
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                <code className="flex-none min-w-full p-5">
                  <p className="-mx-5 pl-4 pr-5 border-l-4 border-transparent">
                    {`<!doctype html>`}<br />
                    {`<html>`}<br />
                    {`<head>`}<br />
                    &nbsp;&nbsp;&nbsp;{`  <meta charset="UTF-8">`}<br />
                    &nbsp;&nbsp;&nbsp;{`  <meta name="viewport" content="width=device-width, initial-scale=1.0">`}<br />
                    &nbsp;&nbsp;&nbsp;{`  <link href="/dist/output.css" rel="stylesheet">`}<br />
                    {`</head>`}<br />
                    {`<body>`}<br />
                    &nbsp;&nbsp;&nbsp;{`  <h1 class="text-3xl font-bold underline">`}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`    Hello world!`}<br />
                    &nbsp;&nbsp;&nbsp;{`  </h1>`}<br />
                    {`</body>`}<br />
                    {`</html>`}<br />
                  </p>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}