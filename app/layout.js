import "./globals.css";
import { Roboto_Flex, Tinos } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

const tinos = Tinos({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tinos",
});

export const metadata = {
  title: "Nana An",
  description:
    "Welcome to the art portfolio website of Nana An. Embark on a visual journey of boundless imagination and artistic brilliance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_flex.variable} ${tinos.variable}`}>
      <meta name="google" content="notranslate"></meta>
      <body className="h-full bg-white md:max-w-7xl md:mx-auto p-2 md:p-16">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
