import Nav from "@/components/nav";
import { workSans } from "@/components/ui/fonts";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Onur Akyüz | Software Engineer",
  description: "Experienced Software Engineer Portfolio – Designing, developing, and implementing robust and scalable software.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onur.sh",
    title: "Onur Akyüz | Software Engineer",
    description: "Experienced Software Engineer Portfolio – Designing, developing, and implementing robust and scalable software.",
    siteName: "Onur Akyüz | Software Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialiased bg-[#fffbee]`}
      >
        <Nav />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
