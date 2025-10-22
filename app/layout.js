import "./globals.css";
import {
  Roboto_Flex,
  Libre_Baskerville,
  Permanent_Marker,
} from "next/font/google";

import CartProvider from "./components/Providers";
import Layout from "./components/Layout";

const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

const baskervville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-baskervville-flex",
});

const permanent_marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker-flex",
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
      suppressHydrationWarning
      className={`${roboto_flex.variable} ${baskervville.variable} ${permanent_marker.variable} overflow-y-scroll`}
    >
      <body className="flex flex-col min-h-screen bg-bg md:max-w-7xl md:mx-auto p-4 lg:pt-16">
        <CartProvider>
          <Layout>{children}</Layout>
        </CartProvider>
      </body>
    </html>
  );
}
