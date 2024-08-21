import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sneaker Store",
  description: "Somos una tienda online de zapatillas importadas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen">
          <NavBar />
          <div className="flex-grow container mx-auto p-10">
          {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
