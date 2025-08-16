import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/global/Provider/Providers";

export const metadata: Metadata = {
  title: "Montasir Mihad",
  description: "Montasir Mihad portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-arp="" suppressHydrationWarning>
      <body className={`font antialiased`} cz-shortcut-listen="true">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
