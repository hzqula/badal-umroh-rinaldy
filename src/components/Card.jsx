import React from "react";
import SubTitle from "./SubTitle";
import CardParagraph from "./CardParagraph";
import CardImage from "./CardImage";

const Card = ({ title, paragraph, image }) => {
  return (
    <div className="flex flex-col items-center w-64 p-4 pb-12 border-2 rounded-lg bg-white-custom border-black-custom">
      <CardImage image={image}></CardImage>
      <SubTitle>{title}</SubTitle>
      <CardParagraph>{paragraph}</CardParagraph>
    </div>
  );
};

export default Card;
