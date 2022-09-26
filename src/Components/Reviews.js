import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviewsForProduct, getProductById } from "../Utils/api-helpers";
import styles from "../Styles/Reviews.module.css";
import ProductCard from "./ProductCard";
import ReviewCard from "./ReviewCard";
import WriteReview from "./WriteReview";

import "../Styles/Home.scss";

export default function Reviews() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    Promise.all([
      getProductById(productId),
      getReviewsForProduct(productId)
    ]).then(([productResp, reviewsResp]) => {
      setProduct(productResp);
      setReviews(reviewsResp);
    });
  }, []);

  useEffect(() => {
    const reviewAvg =
      reviews.reduce((sum, review) => sum + review.star_rating, 0) /
      reviews.length;
    setRating(reviewAvg);
  }, [reviews]);

  function renderNewReview(review) {
    review.id = reviews.length + 1;
    setReviews([...reviews, review]);
  }

  const mappedReviews = reviews.map((review) => {
    return (
      <li key={review.id}>
        <ReviewCard review={review}></ReviewCard>
      </li>
    );
  });
  const reviewContent =
    mappedReviews.length > 0 ? mappedReviews : <li>No Reviews Yet</li>;

  return (
    <>
      <Link to="/">Back to Home</Link>
      <h1>Reviews</h1>
      <p>View all reviews for:</p>
      <div className={styles.productInfo}>
        <ProductCard
          product={product}
          rating={rating}
          showLink={false}
        ></ProductCard>
        <WriteReview
          product={product}
          onReviewSubmit={(e) => renderNewReview(e)}
        ></WriteReview>
      </div>
      <h2>All Previous Reviews</h2>
      <ul className={styles.reviewList}>{reviewContent}</ul>
    </>
  );
}
