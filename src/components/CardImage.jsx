import React from "react";

const CardImage = ({ image }) => {
  return (
    <div className="w-full p-12">
      <img src={image} alt={image} />
    </div>
  );
};

export default CardImage;
