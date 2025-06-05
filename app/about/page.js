import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center px-4">
                <section className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-black/10 dark:border-white/10 p-8 my-12">
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src="/avatar.jpg"
                            alt="Salman Sayyed"
                            className="w-24 h-24 rounded-full shadow mb-4 border-2 border-black/10 dark:border-white/10 object-cover"
                        />
                        <h1 className="text-4xl font-bold text-black dark:text-white mb-2 text-center">About Me</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-2">
                            Cloud Engineer & Full Stack Developer
                        </p>
                    </div>
                    <p className="text-lg mb-4 text-gray-700 dark:text-gray-200">
                        I'm Salman, a software developer focused on building modern, scalable, and efficient cloud solutions.
                    </p>
                    <p className="text-lg mb-4 text-gray-700 dark:text-gray-200">
                        I like solving problems and bringing ideas to life with code. I aim to build clean, reliable systems, whether working alone or with a team.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                        Take a look at my work, and feel free to reach out if you're interested in collaborating.
                    </p>
                    <div className="flex items-center justify-center">
                        <a
                            href="mailto:salman@salmansyyd.com"
                            className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                        >
                            salman@salmansyyd.com
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}