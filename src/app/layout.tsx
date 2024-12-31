import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import "./globals.css";
import Wrapper from "./components/Wrapper";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  weight: ["400", "300", "500", "700"],
  style: ["normal"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Santiago Segurado - Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-screen lg:overflow-hidden">
      <body
        className={`${firaCode.variable} antialiased bg-background w-full h-screen`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
