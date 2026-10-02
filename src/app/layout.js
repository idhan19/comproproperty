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
    <html lang="id">
      <head>
        <meta name="google-site-verification" content="lAdQS0Qwbl_Hy-5NOalDJslQRnWm1myKm45S5_YO_oE" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
