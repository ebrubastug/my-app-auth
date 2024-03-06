import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>Blog</span>
      </Link>
      <nav>
        <Link href="https://github.com/ebrubastug" target="_blank">
          <span>About</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
