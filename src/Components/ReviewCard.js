import StarRating from "./StarRating";

export default function ReviewCard({ review }) {
  return (
    <>
      <h4>{review.headline}</h4>
      <StarRating rating={review.star_rating}></StarRating>
      <strong>by {review.author} </strong>
      <p>{review.body}</p>
    </>
  );
}
