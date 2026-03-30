import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manieshsanwal.in"),
  title: "Maniesh Sanwal | Portfolio - UI/UX Designer & Full-Stack Developer",
  description: "Maniesh Sanwal's professional portfolio showcasing UI/UX design, Web Development, and AI-powered SaaS solutions.",
  keywords: ["Maniesh Sanwal", "Portfolio", "UI/UX Designer", "Full-Stack Developer", "AI SaaS", "Web Design"],
  authors: [{ name: "Maniesh Sanwal" }],
  openGraph: {
    title: "Maniesh Sanwal | Portfolio",
    description: "UI/UX Designer & Full-Stack Developer creating impactful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scrollbar" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}