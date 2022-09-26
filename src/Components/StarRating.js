export default function StarRating({ rating }) {
  let ratingStr = "N/A";

  if (typeof rating === "number" && !isNaN(rating)) {
    const roundRating = Math.round(rating);
    const stars = "☆☆☆☆☆".split("");
    const filledStars = new Array(roundRating).fill("★");
    stars.splice(0, roundRating, ...filledStars);
    ratingStr = stars.join("");
  }

  return <strong>{ratingStr} </strong>;
}
