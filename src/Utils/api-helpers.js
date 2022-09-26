const apiURL = "http://localhost:3004";

export function getAllProducts() {
  return fetch(apiURL + "/products")
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => error);
}

export function getAllReviews() {
  return fetch(apiURL + "/reviews")
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => error);
}

export function getProductById(productId) {
  return fetch(`${apiURL}/products/${productId}`)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => error);
}

export function getReviewsForProduct(productId) {
  return fetch(`${apiURL}/products/${productId}/reviews`)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => error);
}

export function createReview(reviewData) {
  return fetch(`${apiURL}/reviews`, {
    method: "POST",
    body: JSON.stringify(reviewData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => error);
}
