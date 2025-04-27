import "../globals.css";

import { Inria_Sans } from 'next/font/google';

export const metadata = {
  title: "Salman S",
  description: "Welcome to my portfolio",
};


const inraSans = Inria_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: "300"
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inraSans.className}>
      <body className="max-w-screen-xl mx-auto">
        {children}
      </body>
    </html>
  );
}
