import "./globals.css";
import { Ubuntu } from "next/font/google";
import { Navbar } from "../components";
import Head from "next/head";

const font = Ubuntu({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "UniSip | Your Customized Hydration Partner",
  description: "UniSip - Custom Bottles, Labels & Branding for Cafes & Businesses",
  keywords: "custom bottles, hydration, branding, business, cafes, UniSip",
  authors: [{ name: "UniSip Team", url: "https://unisip.in" }],
  openGraph: {
    title: "UniSip | Your Customized Hydration Partner",
    description: "Custom Bottles, Labels & Branding for Cafes & Businesses",
    type: "website",
    url: "https://unisip.in",
    siteName: "UniSip",
  }, 
  alternates: {
    canonical: "https://www.unisip.in",
  },
};

// ✅ Move viewport configuration here
export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://www.unisip.in" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
      </Head>
      <body className={font.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
