import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { fetchTabData } from "../../../server/service";
import ContainerWrapper from "../../wrapper/containerWrapper";
import dataNew from "../../../constants/data";
import tabLabel from "../../../constants/tabData";
import ImageWrapper from "../../wrapper/imageWrapper";

function Tab() {
  const [active, setActive] = useState("Pizza");
  const [tabData, setTabData] = useState(dataNew);

  const handleClick = async (name, id) => {
    setActive(name);
    await fetchTabData(id).then((response) => {
      setTabData(response);
    });
  };

  return (
    <ContainerWrapper>
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {tabLabel.map((item) => (
          <div
            onClick={() => handleClick(item.name, item.id)}
            className={`tablist ${active === item.name ? "active" : ""}`}
          >
            {item.icons}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="recipe_banner">
        <div className="left-col">
          <span className="badge">Italian</span>
          <h1>{tabData.recipe.label}</h1>
          <p>
            <strong>Recipe by:</strong>
            <small>Food52</small>
          </p>
          <h3>Ingredients</h3>
          <div className="ingredients">
            <ul>
              {tabData.recipe.ingredients.map((ingredient) => {
                return (
                  <li>
                    <GiCheckMark size="18px" color="#6fcb9f" />
                    &nbsp;<span>{ingredient.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="right-col">
          <ImageWrapper>
            <img src={tabData.recipe.image} alt="tab" />
          </ImageWrapper>
        </div>
      </div>
    </ContainerWrapper>
  );
}

export default Tab;
