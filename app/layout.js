import "./globals.css";

import { Inria_Sans } from 'next/font/google';
import { Roboto_Mono } from "next/font/google";

export const metadata = {
  title: "Salman S",
  description: "Welcome to my portfolio",
};


const font = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <title>Salman Sayyed | Cloud Engineer</title>
        <meta name="description" content="Salman Sayyed's portfolio – Cloud Engineer. Explore my projects, blog posts, and experience in building scalable cloud solutions and modern web applications." />
        <meta name="keywords" content="Salman Sayyed, Cloud Engineer, Full Stack Developer, Portfolio, AWS, DevOps, JavaScript, React, Next.js, Web Development, Cloud Solutions, Blog" />
        <meta name="author" content="Salman Sayyed" />

        <meta property="og:title" content="Salman Sayyed | Cloud Engineer" />
        <meta property="og:description" content="Explore Salman's portfolio, projects, and blog posts about cloud engineering and web development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://salmansyyd.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Salman Sayyed | Cloud Engineer" />
        <meta name="twitter:description" content="Explore Salman's portfolio, projects, and blog posts about cloud engineering and web development." />

        
        <link rel="icon" href="/icon.png" />
      </head>
      <body className="max-w-screen-xl mx-auto">
        {children}
      </body>
    </html>
  );
}
