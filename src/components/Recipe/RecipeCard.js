import React from "react";
import ImageCard from "../Shared/components/ImageCard";

export const RecipeCard = (props) => {
  return (
    <div className="flexItem">
      <div className="img-wrapper">
        <ImageCard image={props.image} alt={props.label} />
      </div>
      <p>{props.label}</p>
    </div>
  );
};
