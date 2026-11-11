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
  title: "Eric Huang",
  description:
    "Eric Huang's corner of the internt. Currently a Computer Science and Business student at Western University, exploring software engineering, technology, strategy, and creative projects.",
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
