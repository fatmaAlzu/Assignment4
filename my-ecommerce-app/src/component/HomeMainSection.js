import React, { useEffect, useState } from 'react';
import reviewsData from '../data/reviews';

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    // Shuffle reviews
    const shuffledReviews = [...reviewsData].sort(() => 0.5 - Math.random());
    // Get 2 random reviews
    const selectedReviews = shuffledReviews.slice(0, 2);
    setRandomReviews(selectedReviews);
  }, []);

  return (
    <div className="home-main-section">
      <section className="about-us">
        <h2>About Us</h2>
        <p>Company's mission and vision description goes here...</p>
        <button>Shop Now</button>
      </section>
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            <div className="rating">{Array(review.stars).fill().map((_, i) => <span key={i}>★</span>)}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomeMainSection;
