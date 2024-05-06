import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OmniLinks",
  description:
    "OmniLinks is the ultimate platform for content creators," +
    " influencers, and artists to showcase their talent, connect with their audience, " +
    "and monetize their work. With LinkHub, creators can easily aggregate all their social media links, " +
    "embed custom content such as videos, music, and articles, and seamlessly sell merchandise to their followers. " +
    "Whether you're a YouTuber, Instagram influencer, podcaster, or musician, LinkHub provides a centralized hub for your online presence, " +
    "making it easier than ever to engage with your fans and grow your brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
