import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zephyr Card | Caribbean–US Rewards Layer",
  description:
    "Zephyr is a Bahamas-first card-linked rewards platform for tourists, local consumers, and Caribbean–US cross-border shoppers."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
