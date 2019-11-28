import React from "react";

const Rating = ({ count, onChange = () => {}, sortByRating = () => {} }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      stars.push(
        <span
          onClick={() => {
            // onChange(i + 1);
            sortByRating(i+1);
            onChange(i+1)
          }}
          key={i}
        >
          ★
        </span>
      );
    
    } else {
      stars.push(
        <span
          onClick={() => {
            sortByRating(i+1);
            onChange(i + 1);

          }}
          key={i}
        >
          ✩
        </span>
      );
      
    }
  }
  return <div>{stars}</div>;
};
export default Rating;
