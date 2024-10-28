import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['my-widget']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export const metadata: Metadata = {
  title: "Sugata Chanda | Crafting Digital Experiences",
  description: "Modern Portfolio Website of Sugata Chanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://feedback-widget-alpha-orcin.vercel.app/widget.umd.js"></Script>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Script src="https://feedback-widget-alpha-orcin.vercel.app/widget.umd.js"></Script>
          <my-widget project-id="14"></my-widget>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
