"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Josh Garza</title>
        <meta content="width=device-width, initial-scale=1" name="viewpost" />
        <meta name="description" content="Josh Garza portfolio" />
      </head>
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
