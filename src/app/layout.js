import { Geist } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SITE_URL, company, seo } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seo.title,
    template: `%s | ${company.name}`,
  },
  description: seo.description,
  icons: {
    icon: company.logo,
  },
  openGraph: {
    siteName: company.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: kelas `js` ditambahkan skrip di bawah sebelum hydration.
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="lAdQS0Qwbl_Hy-5NOalDJslQRnWm1myKm45S5_YO_oE" />
        {/* Animasi masuk hanya menyembunyikan elemen bila JS aktif (lihat globals.css). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <div className="scroll-progress fixed inset-x-0 top-0 z-[70] h-0.5 bg-brand-600" aria-hidden="true" />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
