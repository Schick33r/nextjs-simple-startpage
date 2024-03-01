import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider"
import { ThemeSwitcher } from "./my-components/ThemeSwitcher";
//import { switchThemeDuration } from "./constants";
import NextImg from 'next/image'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nextjs-simple-startpage",
  description: "nextjs-simple-startpage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
       // className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] ${switchThemeDuration}`}
        className={`${inter.className} p-5 h-screen bg-[url(/triangle-clouds4k.jpg)] bg-cover bg-center`} // text-white
        // bg-slate-50 dark:bg-[#0d1117] 
        >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
