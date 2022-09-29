import styles from "./Card.module.scss";

interface ICardProps {
  href: string;
  title: string;
  body: string;
}

function Card({ href, title, body }: ICardProps) {
  return (
    <a href={href} className={styles.card}>
      <h2>{title}</h2>
      <p>{body}</p>
    </a>
  );
}

export default Card;
