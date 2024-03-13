import { Inter } from "next/font/google";
import Navbar from "./navbar/navBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MarketSimplified",
  description: "Created by Jacob Delega",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
