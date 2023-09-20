import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { FaPiedPiperAlt, FaGithub, FaDiscord, FaSearch } from 'react-icons/fa'

export default function Navbar() {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <nav className="flex w-full h-20 py-3 px-10 border-b border-gray-700 justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link href={`/Chats`}>
          <FaPiedPiperAlt className="text-white h-10 w-10" />
        </Link>
        <div className="text-white text-lg font-semibold">Your Documentation</div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-white hover:underline cursor-pointer">About</div>
        <div className="text-white hover:underline cursor-pointer">Contact ↗</div>

        <a
          href="https://github.com/your-github-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500"
        >
          <FaGithub className="text-lg" />
        </a>

        <a
          href="https://discord.gg/your-discord-invite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500"
        >
          <FaDiscord className="text-lg" />
        </a>
      </div>
    </nav>
  );
}
