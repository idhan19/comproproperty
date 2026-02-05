import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"; // [!code ++]
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({ // [!code ++]
  variable: "--font-serif", // [!code ++]
  subsets: ["latin"], // [!code ++]
}); // [!code ++]

export const metadata = {
  title: "PropertyVista - Rumah Impian Anda Menanti", // [!code ++]
  description: "Temukan properti premium berkualitas tinggi untuk keluarga Anda.", // [!code ++]
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`} // [!code ++]
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
