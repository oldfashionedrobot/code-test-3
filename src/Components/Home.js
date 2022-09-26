import React, { useEffect, useState } from "react";
import { getAllProducts, getAllReviews } from "../Utils/api-helpers";
import ProductCard from "./ProductCard";

import "../Styles/Home.scss";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [ratingMap, setRatingMap] = useState({});

  useEffect(() => {
    Promise.all([getAllReviews(), getAllProducts()]).then(
      ([reviews, products]) => {
        setProducts(products);

        const map = reviews.reduce((acc, review) => {
          if (!acc[review.productId]) acc[review.productId] = [review];
          else acc[review.productId].push(review);
          return acc;
        }, {});

        for (let productId in map) {
          map[productId] =
            map[productId].reduce((sum, rev) => sum + rev.star_rating, 0) /
            map[productId].length;
        }

        setRatingMap(map);
      }
    );
  }, []);

  const productList = products.map((product) => {
    return (
      <li key={product.id}>
        <ProductCard
          product={product}
          rating={ratingMap[product.id]}
        ></ProductCard>
      </li>
    );
  });

  return (
    <>
      <h1>Home</h1>
      <p>Select a product to view reviews.</p>
      <ul>{productList}</ul>
    </>
  );
}
