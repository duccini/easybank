import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

import { Public_Sans } from "next/font/google";

export const metadata = {
  title: "Easybank",
  description: "Guilherme Duccini - Front-end Dev",
};

const public_sans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={public_sans.className}>
        <div className="site-wrap">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
