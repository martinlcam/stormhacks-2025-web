import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";

const Eina = localfont({
  src: [
    {
      path: "./fonts/OnlineWebFonts_COM_d8453a600c62e71e4d533d4b715f3d19/Eina 04 W03 SemiBold/Eina 04 W03 SemiBold.woff2",
      weight: "600",
      style: "normal"
    }
  ],
  variable: "--font-Eina",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Signable",
  description: "Live translation, out of box",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Eina.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
