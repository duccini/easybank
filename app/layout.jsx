import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Easybank",
  description: "Guilherme Duccini - Front-end Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}