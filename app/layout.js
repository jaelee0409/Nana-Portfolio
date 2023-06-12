import "./globals.css";
import { Roboto_Flex, Tinos } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { client } from "../sanity/lib/client";

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

export default async function RootLayout({ children }) {
  getData().then((data) => {
    console.log(data);
  });

  return (
    <html lang="en" className={`${roboto_flex.variable} ${tinos.variable}`}>
      <body className="flex flex-col h-screen md:max-w-7xl md:mx-auto p-2 md:p-16">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

export async function getData() {
  const query = '*[_type == "art"]';

  try {
    const art = await client.fetch(query);
    return art;
  } catch (error) {
    console.log("Data failed to fetch", error);
  }
}
