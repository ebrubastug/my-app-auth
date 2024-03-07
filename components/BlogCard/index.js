import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

function BlogCard(props) {
  return (
    <>
      <div class="container">
        <Link href={`/${props.id}`} className={styles.card}>
          <div className={styles.cardBody}>
            <h3>{props.text}</h3>
          </div>
        </Link>
        <div className={styles.btnContainer}>
          <select aria-label="Default select example" className={styles.btn}>
            <option value="1">En</option>
            <option value="2">De</option>
            <option value="3">Tr</option>
          </select>
          <button type="button" className={styles.btn}>
            Today
          </button>
          <button type="button" className={styles.btn}>
            Random
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
