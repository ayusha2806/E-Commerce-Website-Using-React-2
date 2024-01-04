// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductImageCarousel from './ProductImageCarousel';
import ProductReviews from './ProductReviews';

const ProductDetail = () => {
  const { title } = useParams();

  const getProductDetails = (title) => {
    // Placeholder data, replace with actual data fetching logic
    return {
      title,
      price: 100, // Example price
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      ],
      reviews: [
        { id: 1, user: 'User1', comment: 'Great product!', rating: 5 },
        { id: 2, user: 'User2', comment: 'Good quality.', rating: 4 },
        // Add more reviews as needed
      ],
    };
  };

  const productDetails = getProductDetails(title);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <ProductImageCarousel images={productDetails.images} />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">{productDetails.title}</h2>
          <p>₹{productDetails.price}</p>
          <ProductReviews reviews={productDetails.reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
