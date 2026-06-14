import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { NavBar } from "@/components/nav/NavBar";
import { BottomNav } from "@/components/nav/BottomNav";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jethro — Developer Portfolio",
  description:
    "Developer portfolio for Jethro. Junior developer, SOC analyst, and QA engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className="scroll-pt-16">
      <head>
        {/* Prevent flash of wrong theme on first load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} font-sans`}>
        <NavBar />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
