import "./globals.css";

import { Open_Sans } from 'next/font/google';

export const metadata = {
  title: "Salman S",
  description: "Welcome to my portfolio",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
