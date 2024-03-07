import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useAuth } from "@/hooks/useAuth";

export async function Header() {
  const auth = await useAuth.fromServer();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>Useless Facts</span>
      </Link>
      <nav>
        <Link href="https://github.com/ebrubastug" target="_blank">
          <span className={styles.headerBtn}> About</span>
        </Link>
        {auth ? (
          <Link href="/panel">
            <span className={styles.headerBtn}>Panel</span>
          </Link>
        ) : (
          <Link href="/login">
            <span className={styles.headerBtn}>Login</span>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
