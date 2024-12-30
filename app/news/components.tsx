import styles from "./components.module.css";
import Image from "next/image";

interface PostCardProps {
  title: string;
  publishedDate: string;
  imageSrc: string;
}

export const PostCard: React.FC<PostCardProps> = ({ title, publishedDate, imageSrc }) => {
  return (
    <div className={styles.newsCard}>
      <Image src={imageSrc} alt={title} width={600} height={400} />
      <h2>{title}</h2>
      <p>{publishedDate}</p>
    </div>
  );
};
