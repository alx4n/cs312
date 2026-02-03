import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>This is a title</title>
        <meta name="description" content="Next.js activity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={`${styles.nav}`}>
        <Image
          src="/RRthick.png"
          alt="Two R's with an oboe reed underneath"
          width={100}
          height={75}
          priority
        />
        <Link className={`${styles.link} ${styles.nav}`} href="./dogs-ssg">SSG</Link>
        <Link className={`${styles.link} ${styles.nav}`} href="./dogs-ssr">SSR</Link>
      </nav>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        
      </div>
    </>
  )
}