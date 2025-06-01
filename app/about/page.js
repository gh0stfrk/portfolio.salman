import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 flex-wrap flex-row-reverse">
                <main className="flex-1 mx-auto py-16 px-4 max-w-2xl">
                    <h1 className="text-4xl font-bold mb-6 text-black">About Me</h1>
                    <p className="text-lg mb-4 text-gray-700">
                        Hello! I'm Salman, a passionate software developer focused on building modern, 
                        scalable, and efficient cloud solutions.
                    </p>
                    <p className="text-lg mb-4 text-gray-700">
                        I like solving problems and bringing ideas to life with code. 
                        I aim to build clean, reliable systems, whether working alone or with a team.
                    </p>
                    <p className="text-lg text-gray-700">
                        Take a look at my work, and feel free to reach out if you're interested in collaborating.
                    </p>
                </main>
            </div>
            <Footer />
        </div>
    );
}