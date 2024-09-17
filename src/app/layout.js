import { 
  Footer,
  Navbar,
} from "@/containers";
import localFont from "next/font/local";
import "./globals.css";
import { ScrollToTop } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mercado libre",
  description: "Mercado libre web page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop/>
        <Navbar/>
        <main className="min-h-screen flex justify-center pt-32 pb-14 bg-[#f4f4f4]">
          <div className="max-w-[1200px] px-6 lg:px-10">
            {children}
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
