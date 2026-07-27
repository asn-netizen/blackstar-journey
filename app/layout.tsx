import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { resolveBlackstarAssetBasePath } from "../config/blackstar-github-pages";
import "./globals.css";

const blackstarAssetBasePath = resolveBlackstarAssetBasePath();

export const metadata: Metadata = {
  title: "Blackstar — Start Your Journey",
  description:
    "An interactive journey through stories, sound, projects, and places connecting Ghana, the African diaspora, and global communities.",
  icons: {
    icon: `${blackstarAssetBasePath}/favicon.svg`,
    shortcut: `${blackstarAssetBasePath}/favicon.svg`,
  },
};

export default function BlackstarRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
