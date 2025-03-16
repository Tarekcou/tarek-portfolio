import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shoriful Islam Portfolio",
  description: "Shoriful Islam Full Stack Developer",
  icons: {
    icon: "/images/logo.png", // Path to your favicon in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <Head>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <body className={font.className}>{children}</body>
    </html>
  );
}
