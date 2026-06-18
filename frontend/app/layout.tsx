import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
export const metadata: Metadata = {
  title: "Cafeteria Legal",
  description: "Seu café, do seu jeito",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

