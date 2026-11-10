import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fideliza | Cada compra abre la próxima",
  description: "Fidelización y decisiones de ofertas para locales de comida.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
