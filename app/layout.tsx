import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dante's Inferno - Premium Cannabis Strain | CULTIMED by MAD TIKI",
  description: "Descend into pure euphoria with Dante's Inferno, a legendary hybrid strain by MAD TIKI. 28% THC, premium quality. Available at CULTIMED Dispensary.",
  keywords: ["cannabis", "dante's inferno", "mad tiki", "cultimed", "dispensary", "hybrid strain", "premium cannabis"],
  openGraph: {
    title: "Dante's Inferno - MAD TIKI",
    description: "Experience the legendary hybrid strain with 28% THC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}