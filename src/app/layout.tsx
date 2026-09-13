import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Elene Sturua — Software Engineer",
  description:
    "Portfolio of Elene Sturua — M.S. Computer Science at Georgia Tech. Software engineer, researcher, HackMIT winner.",
  openGraph: {
    title: "Elene Sturua — Software Engineer",
    description: "Explore my portfolio like a chess game.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elene Sturua — Software Engineer",
    description: "Explore my portfolio like a chess game.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${spaceMono.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
