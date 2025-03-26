import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ThemeProvider from "./lib/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rijschool Expert - Haal je rijbewijs met de beste instructeurs",
  description: "Haal je rijbewijs met de beste rijinstructeurs. Persoonlijke begeleiding, hoge slagingspercentages en flexibele lespakketten voor jouw rijsucces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-20 sm:pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
