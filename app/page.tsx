import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>要素と交差した時は色をブレンドさせる</h1>
      <h1>リンクがあるときは拡大させる</h1>
      <Link className={styles.link} href="/">
        リンク
      </Link>
      <Link className={styles.link} href="/">
        リンク
      </Link>
    </main>
  );
}
