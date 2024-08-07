import type {Metadata} from "next";
import {Bungee} from "next/font/google";
import "./globals.css";

const bungee = Bungee({subsets: ["latin"], weight: "400"});


export const metadata: Metadata = {
    title: "Chirpy Design",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={bungee.className}>{children}</body>
        </html>
    );
}
