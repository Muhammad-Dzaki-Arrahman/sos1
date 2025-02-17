import React from "react";
import img1 from "../assets/images/items/snake1.png";
import img2 from "../assets/images/background/bg-snake10.png";
const ImageFlips = () => {
  return (
    <>
      <div className="image-flip">
        <img src={img1} alt="First" className="image-front" />
        <img src={img2} alt="Second" className="image-back" />
      </div>
    </>
  );
};

export default ImageFlips;
