import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1 max-w-2xl mx-auto py-16 px-4">
                <h1 className="text-4xl font-bold mb-6 text-black">About Me</h1>
                <p className="text-lg mb-4 text-gray-700">
                    Hello! I’m Salman, a passionate software developer focused on building modern, performant, and user-friendly web applications. My portfolio showcases a range of projects that highlight my skills in JavaScript, React, and other cutting-edge technologies.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                    I enjoy solving complex problems and turning ideas into reality through code. Whether working independently or as part of a team, I strive for clean, maintainable, and scalable solutions.
                </p>
                <p className="text-lg text-gray-700">
                    Feel free to explore my work and reach out if you’d like to collaborate!
                </p>
            </main>
            <Footer />
        </div>
    );
}