import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
const monteserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifólio - João Lucas Lourenço",
  description: "Portifólio pessoal de João Lucas Lourenço",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={monteserrat.className}>{children}
      <Analytics/>
      
      </body>
    </html>
  );
}
