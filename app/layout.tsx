import type { Metadata } from "next";
import { Figtree, Jura } from "next/font/google";
import "./globals.css";

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const name = Jura({
  subsets: ["latin"],
  variable: "--font-name",
  weight: ["400", "500", "600"],
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
