import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";

const sgSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sg-sans",
});

const sgMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sg-mono",
});

export const metadata: Metadata = {
  title: "Satoshi Gazette",
  description:
    "AI-assisted, Bitcoin-only news desk. Live wire, concise briefings, and deep dives on mining and infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sgSans.variable} ${sgMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
