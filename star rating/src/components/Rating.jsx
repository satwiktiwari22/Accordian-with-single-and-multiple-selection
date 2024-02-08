import { FaStar } from "react-icons/fa";
import React, { useState } from "react";
import "./Rating.css";
const Rating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (i) => {
    setRating(i);
  };
  const handleMouseEnter = (i) => {
    setHover(i);
  };
  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="container">
      <h1>Star Rating</h1>
      <div className="rating">
        {[...Array(noOfStars)].map((_, i) => {
          i += 1;
          return (
            <FaStar
              key={i}
              className={i <= (hover || rating) ? "active" : "inactive"}
              size={50}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => handleClick(i)}
            />
          );
        })}
      </div>
      <h2>
        The rating is {rating} {rating === 1 ? "star" : "stars"}.
      </h2>
    </div>
  );
};

export default Rating;
