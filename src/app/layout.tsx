import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OCAJA Technologies – Six Pillars. One Technology Partner.",
  description:
    "Integrated software, cybersecurity, cloud, AI, digital financial and IT consulting services for organisations in Uganda, Zambia and East and Southern Africa.",
  keywords: [
    "OCAJA Technologies",
    "IT services Uganda",
    "IT services Zambia",
    "cybersecurity Kampala",
    "fintech integration",
    "software development East Africa",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "OCAJA Technologies – Six Pillars. One Technology Partner.",
    description:
      "Integrated technology solutions designed for the realities of East and Southern Africa.",
    siteName: "OCAJA Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
