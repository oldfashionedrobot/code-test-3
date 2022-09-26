import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function ProductCard({ product, rating, showLink }) {
  const name = product ? product.name : "Product Name";

  return (
    <div>
      <h4>{name}</h4>
      <img src="https://place-hold.it/300x200" alt={`${product?.name}`} />

      <div>
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
