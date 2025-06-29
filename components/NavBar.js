"use client"
import { useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Footer from "@/components/Footer";

const Navbar = () => {
    const routeMap = {
        "about": "/about",
        "home": "/",
    };

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex p-5 justify-between items-center">
            <a className="logo" href="/">
                {/* <h1 className="text-2xl font-bold text-black">Salman Sayyed</h1>
                <p className="text-sm text-gray-500">Cloud Engineer</p> */}
                <img src="/logo.svg" className="w-11" />
            </a>
            {/* Navigation options and social icons */}
            <div className="hidden md:flex items-center space-x-8 ml-auto">
                <ul className="flex space-x-4">
                    {Object.keys(routeMap).map((key) => (
                        <li key={key}>
                            <a
                                href={routeMap[key]}
                                className="relative group text-black transition-colors duration-300 ease-in-out text-sm"
                            >
                                {key}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 ease-in-out group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center space-x-4 ml-8">
                    <a
                        href="https://github.com/gh0stfrk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-700 transition-colors text-xl"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/syydsalman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-700 transition-colors text-xl"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://x.com/gh0stfrk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-700 transition-colors text-xl"
                        aria-label="Twitter"
                    >
                        <FaXTwitter />
                    </a>
                </div>
            </div>
            {/* Hamburger menu for mobile */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex flex-col justify-center items-center w-8 h-8"
                    aria-label="Toggle menu"
                >
                    <span className={`block h-1 w-4 bg-black mb-1 rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block h-1 w-6 bg-black mb-1 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block h-1 w-4 bg-black rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col md:hidden transition-transform duration-300 ease-in-out transform animate-slide-in">
                    {/* Close icon */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
                        aria-label="Close menu"
                    >
                        <span className="block w-6 h-0.5 bg-black rotate-45 absolute"></span>
                        <span className="block w-6 h-0.5 bg-black -rotate-45"></span>
                    </button>
                    {/* Navigation links */}
                    <div className=" w-full flex flex-col items-start">
                        {/* Social icons in mobile menu */}
                        <div className="flex space-x-6 mt-20 ml-8 mb-8">
                            <a
                                href="https://github.com/gh0stfrk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-700 transition-colors text-2xl"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/syydsalman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-700 transition-colors text-2xl"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://x.com/gh0stfrk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-700 transition-colors text-2xl"
                                aria-label="Twitter"
                            >
                                <FaXTwitter />
                            </a>
                        </div>
                        {/* Navigation items */}
                        <ul className="ml-8 flex w-full flex-col items-start space-y-3 pt-8">
                            {Object.keys(routeMap).map((key) => (
                                <li key={key} className="w-full border border-gray-400 rounded">
                                    <a
                                        href={routeMap[key]}
                                        className="text-black w-80% block text-xl font-medium py-2 px-2 hover:bg-gray-100 rounded transition"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {key}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
