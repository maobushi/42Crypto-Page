import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: '../font/DIN Bold.ttf',
  display: 'swap',
})
 
export const metadata: Metadata = {
  title: "42Crypto",
  description: "42Crypto Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
