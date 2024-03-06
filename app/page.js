import BlogCard from "@/components/BlogCard";
import styles from "./styles.module.scss";

async function getPosts() {
  const responce = await fetch("https://dummyjson.com/posts?limit=10");
  return responce.json();
}

export default async function Home() {
  const { posts } = await getPosts();

  console.log(posts);

  return (
    <div className={styles.blogsContainer}>
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
