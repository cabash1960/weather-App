import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Provider from "@/components/Provider";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-base",
  weight: ["700"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ["300", "500", "600", "700"],
  variable: "--font-dm-sans-base",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "AI implemented weather App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full  text-neutral-300 flex flex-col gap-14 lg:px-18 lg:py-12 px-4 py-8 bg-[#0B0F2E]">
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
