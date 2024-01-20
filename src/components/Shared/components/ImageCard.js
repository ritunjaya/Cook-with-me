import React, { useState } from "react";

const ImageCard = (props) => {
  const [isError, setIsError] = useState(false);
  const ImageNotAvailable =
    "https://pbs.twimg.com/media/ER3cOugVAAIxavx?format=png&name=900x900";

  const handleImageError = () => setIsError(true);

  return (
    <div>
      <img
        src={isError ? ImageNotAvailable : props.image}
        alt={props.alt}
        loading="lazy"
        onError={handleImageError}
        style={{
          height: "clamp(10rem, 90%, 12rem)",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default ImageCard;
