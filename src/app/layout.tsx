import type { Metadata } from "next";
import {Inter,Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400"
})


export const metadata: Metadata = {
  title: "FVDLance",
  description: "FVDLance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebas.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
