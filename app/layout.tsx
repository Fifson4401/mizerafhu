import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="bg-background-dark/90">
      <head />
      <body className={clsx(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="min-h-screen flex flex-col">
            <header>
              <Navbar />
            </header>
            <main className="flex-grow">
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}