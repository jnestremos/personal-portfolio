import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estremos Portfolio",
  description: "Personal portfolio website for Estremos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
