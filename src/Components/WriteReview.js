import { useState } from "react";
import { createReview } from "../Utils/api-helpers.js";
import styles from "../Styles/WriteReview.module.css";

export default function WriteReview({ product, onReviewSubmit }) {
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [headline, setHeadline] = useState("");
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState("");

  function toggleView(e) {
    e.preventDefault();
    setFormOpen(!formOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      author: name,
      star_rating: parseInt(rating),
      headline,
      body,
      productId: product.id.toString()
    };

    createReview(data).then((data) => clearForm());

    if (onReviewSubmit) onReviewSubmit(data);
  }

  function clearForm(e) {
    if (e) e.preventDefault();

    setName("");
    setHeadline("");
    setRating(0);
    setBody("");
    setFormOpen(false);
  }

  const form = (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label className={styles.formLabel}>Name:</label>
      <input
        className={styles.formInput}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <label className={styles.formLabel}>Star Rating:</label>
      <input
        className={styles.formInput}
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        type="number"
        min="0"
        max="5"
      />
      <label className={styles.formLabel}>Headline:</label>
      <input
        className={styles.formInput}
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
        type="text"
      />

      <label className={styles.formLabel}>Body:</label>
      <textarea
        className={styles.formInput}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <br></br>
      <input className={styles.btn} type="submit" value="Submit" />
    </form>
  );

  const link =
    formOpen === false ? (
      <>
        <a href="" onClick={(e) => toggleView(e)}>
          Write a Review
        </a>
        <p>Share your opinion about this product.</p>
      </>
    ) : (
      <a href="" onClick={(e) => clearForm(e)}>
        Cancel
      </a>
    );

  return (
    <>
      <div className={styles.wrapper}>
        {link}
        {formOpen ? form : ""}
      </div>
    </>
  );
}
