import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
import { AuthProvider } from "./context/AuthContext";
import ConditionalNavBar from "./components/ConditionalNavBar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sneaker Store",
  description: "Somos una tienda online de zapatillas importadas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <NotificationProvider>
              <main className="flex flex-col min-h-screen">
                <ConditionalNavBar />
                <div className="flex-grow container mx-auto p-10">
                  {children}
                </div>
                <Footer />
              </main>
            </NotificationProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
