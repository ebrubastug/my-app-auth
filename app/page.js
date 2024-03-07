import BlogCard from "@/components/BlogCard";
import styles from "./styles.module.scss";

export default async function Home() {
  return (
    <div className={styles.blogsContainer}>
      <BlogCard />
    </div>
  );
}