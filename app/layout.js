import styles from "./styles.module.scss";
import "../styles/global.scss";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <title> Teklifim Gelsin | Useless Facts </title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
