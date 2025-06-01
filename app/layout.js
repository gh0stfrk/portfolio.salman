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
        <link rel="icon" href="icon.png" />
      </head>
      <body className="max-w-screen-xl mx-auto">
        {children}
      </body>
    </html>
  );
}
