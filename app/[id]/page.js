import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";

async function getPost(id) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default async function Page({ params }) {
  const { id, title, body, userId } = await getPost(params.id);

  if (!title) {
    return notFound();
  }

  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/id/${userId}/960/400`}
          alt={title}
          fill
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
