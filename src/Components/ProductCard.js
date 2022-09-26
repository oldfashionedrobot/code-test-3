import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import styles from "../Styles/Card.module.css";

export default function ProductCard({ product, rating, showLink }) {
  const name = product ? product.name : "Product Name";

  return (
    <div>
      <div className={styles.card}>
        <h4 className={styles.title}>{name}</h4>
        <img src="https://place-hold.it/300x200" alt={`${product?.name}`} />
        <StarRating rating={rating}></StarRating>
        {showLink === false ? (
          ""
        ) : (
          <Link to={`/products/${product?.id}`}>View Reviews</Link>
        )}
      </div>
    </div>
  );
}
