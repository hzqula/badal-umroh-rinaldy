import React from "react";

const CardImage = ({ image }) => {
  return (
    <div className="w-full p-6 sm:p-8 md:p-10 lg:p-12">
      <img src={image} alt={image} className="w-full h-auto" />
    </div>
  );
};

export default CardImage;
