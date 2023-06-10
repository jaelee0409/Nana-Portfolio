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
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_flex.variable} ${tinos.variable}`}>
      <body className="overflow-scroll">
        <div className="md:max-w-lg mx-auto px-4 py-2 md:p-20">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
