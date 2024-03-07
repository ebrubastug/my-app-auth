import BlogCard from "@/components/BlogCard";
import styles from "./styles.module.scss";
import Httper from "../service/Api";

const randomUrl =
  "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";

var response = await Httper("get", randomUrl);

export default async function Home() {
  console.log(response.text);

  return (
    <div className={styles.blogsContainer}>
      <BlogCard key={response.id} text={response.text} />
    </div>
  );
}
