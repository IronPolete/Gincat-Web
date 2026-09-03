import "./globals.css";
import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "GINCAT SYSTEM",
  description: "Industrial solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}

        <CookieConsent />
      </body>
    </html>
  );
}