import "./globals.css";
import type { Metadata } from "next";
import { Original_Surfer } from "next/font/google";

const font = Original_Surfer({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ben Storry",
  description: "Surfer, coach, and generally cool guy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
