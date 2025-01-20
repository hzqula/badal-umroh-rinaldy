import React from "react";
import SubTitle from "./SubTitle";
import CardParagraph from "./CardParagraph";
import CardImage from "./CardImage";

const Card = ({ title, paragraph, image }) => {
  return (
    <div className="flex flex-col items-center w-full p-3 pb-8 border-2 rounded-lg sm:w-56 md:w-60 lg:w-64 sm:p-4 sm:pb-12 bg-white-custom border-black-custom">
      <CardImage image={image}></CardImage>
      <SubTitle>{title}</SubTitle>
      <CardParagraph>{paragraph}</CardParagraph>
    </div>
  );
};

export default Card;
