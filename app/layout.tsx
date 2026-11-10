import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sans = localFont({
  src: "./fonts/Figtree.ttf",
  variable: "--font-sans",
  weight: "400 700",
  style: "normal",
  display: "swap",
});

const name = localFont({
  src: "./fonts/Jura.ttf",
  variable: "--font-name",
  weight: "400 600",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eric Huang — Selected Work",
  description:
    "A collection of work, experiments, and things I'm curious about.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* Browser extensions such as Grammarly can add body attributes before hydration. */}
      <body
        className={`${sans.variable} ${name.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
