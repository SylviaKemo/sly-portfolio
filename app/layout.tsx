import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sylvia Kemo — Fullstack Developer",
  description: "Portfolio of Sylvia Kemo, fullstack developer based in Nairobi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
