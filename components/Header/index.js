import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>Useless facts</span>
      </Link>
      <nav>
        <Link href="https://github.com/ebrubastug" target="_blank">
          <span className={styles.headerBtn}> About</span>
        </Link>
        <Link href="/Login"  >
          <span className={styles.headerBtn}>Login</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
