import React from "react";
import { RecipeCard } from "../../../Recipe/RecipeCard";

const SearchResult = ({ fetchedData }) => {
  return (
    <>
      {fetchedData.hits.map((item, index) => (
        <RecipeCard
          image={item.recipe.image}
          label={item.recipe.label}
          key={index}
        />
      ))}
    </>
  );
};

export default SearchResult;
