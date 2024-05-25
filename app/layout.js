
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TO DO LIST",
  description: "CREATE WORK",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body >{children}</body>
      </html>
    </Providers>
  );
}
