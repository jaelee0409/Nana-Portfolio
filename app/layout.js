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

const hoveredImages = [
  "/nav_hover_1_NANA.png",
  "/nav_hover_2_ART.png",
  "/nav_hover_3_SKETCH.png",
  "/nav_hover_4_ABOUT.png",
  "/nav_hover_5_SHOP.png",
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_flex.variable} ${tinos.variable}`}>
      {hoveredImages.map((image) => {
        return <link rel="preload" href={image} as="image" key={image} />;
      })}
      <meta name="google" content="notranslate"></meta>
      <body className="flex flex-col h-full md:max-w-7xl md:mx-auto p-2 md:p-16">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
