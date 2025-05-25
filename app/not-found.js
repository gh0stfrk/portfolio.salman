// app/not-found.tsx (or not-found.js)
import React from 'react';
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center px-4">
                <h1 className="text-6xl font-extrabold text-black mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page not found</h2>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    Couldn't find the page you're looking for.<br />
                    It may have been moved or deleted.
                </p>
                <a
                    href="/"
                    className="inline-block px-6 py-3 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition"
                >
                    Back to Homepage
                </a>
            </main>
            <Footer />
        </div>
    );
};

export default NotFoundPage;