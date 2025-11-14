import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopHub - Your Premium Online Shopping Destination",
  description: "Discover amazing products at great prices. Shop electronics, fashion, home goods and more with fast shipping and excellent customer service.",
  keywords: ["ecommerce", "online shopping", "electronics", "fashion", "home goods", "deals", "discounts"],
  authors: [{ name: "ShopHub Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ShopHub - Premium Online Shopping",
    description: "Shop the latest products with amazing deals and fast shipping",
    url: "https://shophub.com",
    siteName: "ShopHub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopHub - Premium Online Shopping",
    description: "Shop the latest products with amazing deals and fast shipping",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
