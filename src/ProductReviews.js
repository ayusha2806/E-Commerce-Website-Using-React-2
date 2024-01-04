// ProductReviews.js
import React from 'react';

const ProductReviews = ({ reviews }) => {
  return (
    <div>
      <h4>Product Reviews</h4>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.user}</p>
          <p>{review.comment}</p>
          <p>Rating: {review.rating}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
