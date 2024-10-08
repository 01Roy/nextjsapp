import { Inter, Arimo, Roboto } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: '--primary-font'
});

const roboto = Roboto({
  weight: ['300', '400', '500'],
  subsets: ["latin"],
  display: "swap",
  variable: "--secondary-font"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} ${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
