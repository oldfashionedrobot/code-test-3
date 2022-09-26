import StarRating from "./StarRating";
import styles from "../Styles/Card.module.css";

export default function ReviewCard({ review }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{review.headline}</h4>
      <StarRating rating={review.star_rating}></StarRating>
      <strong>by {review.author} </strong>
      <p className={styles.textBody}>{review.body}</p>
    </div>
  );
}
