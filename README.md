## Oliver Space Take-Home Instructions

Your mission, if you choose to accept it, is to build out a mock of a product reviews flow. 
This includes a page for users to submit their reviews as well as a page to read reviews.

REQUIREMENTS:
- Create a page where a user can view all of the reviews for a given product
    - This page should also display the average rating for this product
- Create a page where a user can review a given product with the following information:
    - Their name (the author)
    - A star rating
    - Headline text (a title for their review)
    - The body of the review (a longer paragraph)

Please spend 2 hours completing this task to whatever extent you can finish, but don't
go over time. The expectation is NOT that you will get through all of the requirements, so please add notes on anything else you would have done with more time. Feel free to use any third-party libraries that you find helpful. Please spend some of your time on styling - since we are a consumer-facing company, we care about UI quality. It's ok to sacrifice some functionality for looks (though we leave it up to you to determine what you want to trade off).

## Running the app
Start the mock JSON server on port 3004 by running `npm run server`
Start the React app on port 3000 using `npm start`
You can then make requests to http://localhost:3004/products, http://localhost:3004/reviews or http://localhost:3004/products/:id/reviews using axios, or any of your preferred methods

More info on json-server [here](https://www.npmjs.com/package/json-server)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Best of luck! Feel free to email <a href="mailto:frontend-eng@oliver.space">frontend-eng@oliver.space</a> if you have any questions while you're completing the exercise. We're happy to help :)