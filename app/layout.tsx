import type { Metadata } from "next";
import { Instrument_Serif, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const description =
  "Sylvia Kemo is a fullstack developer in Nairobi, building fast, reliable web products end to end.";

export const metadata: Metadata = {
  title: "Sylvia Kemo — Fullstack Developer",
  description,
  openGraph: {
    title: "Sylvia Kemo — Fullstack Developer",
    description,
    images: ["/images/sylvia-avatar.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
