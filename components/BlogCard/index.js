import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

function BlogCard(props) {
  return (
    <Link href={`/${props.id}`} className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/id/${props.userId}/200/300`}
          alt="Blog Card Image"
          fill
        />
      </div>
      <div className={styles.cardBody}>
        <h3>{props.title}</h3>
        <p> {props.body}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
