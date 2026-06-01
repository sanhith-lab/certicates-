import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Sanhith Reddy | Portfolio",
  description: "Full-Stack Developer & Cybersecurity Enthusiast - Building secure, scalable digital experiences",
  keywords: ["developer", "cybersecurity", "full-stack", "portfolio", "web development"],
  authors: [{ name: "Cherukupally Sanhith Reddy" }],
  openGraph: {
    title: "Sanhith Reddy | Portfolio",
    description: "Full-Stack Developer & Cybersecurity Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
