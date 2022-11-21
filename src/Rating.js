import React from "react";
import rat from './images.png'
const Rating = (props) => {
  const sty = {
    height: "2px",
    width: "2px",
  };
  return (
    <span>
      {[...Array(props.star)].map((a) => {
        return (
          <img
            src={rat}
           
            
          />
        );
      })}
    </span>
  );
};

export default Rating;