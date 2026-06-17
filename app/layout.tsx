import type { Metadata } from "next";
import "./globals.css";
import GlobalParticles from "@/components/GlobalParticles";

export const metadata: Metadata = {
  title: "Heartbeat Hotel | Luxury Premium Living",
  description: "Experience premium luxury living at Heartbeat Hotel - comfort, security, and excellence under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-luxury-black text-ivory">
        <GlobalParticles />
        {children}
      </body>
    </html>
  );
}
