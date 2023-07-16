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
    <html
      lang="en"
      className={`${roboto_flex.variable} ${tinos.variable} overflow-y-scroll`}
    >
      <meta name="google" content="notranslate"></meta>
      <body className="flex flex-col min-h-screen bg-white md:max-w-7xl md:mx-auto p-2 md:p-16">
        <div className="flex-1">
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
