// ProductImageCarousel.js
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProductImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block w-100" src={image} alt={`Image ${idx + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductImageCarousel;
