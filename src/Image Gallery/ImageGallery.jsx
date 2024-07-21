import React, { useState } from "react";
import Navbar from "../components/Navbar";

const ImageGallery = () => {
  const catImgs = [
    "https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://plus.unsplash.com/premium_photo-1677545182425-4fb12bdb9faf?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1511694009171-3cdddf4484ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [showImg, setShowImg] = useState(null);
  const handleClick = (cat) => {
    setShowImg(cat);
  };
  return (
    <div>
      <Navbar text={"Image Gallery"} />
      <p className="underline text-center my-4">Click on an image!</p>
      <div className="flex max-w-fit mx-auto">
        {catImgs.map((cat, index) => (
          <img
            src={cat}
            alt={`cat-${index}`}
            className="cat-img "
            key={index}
            onClick={() => handleClick(cat)}
          />
        ))}
      </div>
      {showImg && (
        <div className="m-2">
          <p className="text-xl font-semibold text-center mb-6">
            Selected Image
          </p>
          <img
            src={showImg}
            alt="big-cat-img"
            className="w-[500px] shadow-2xl shadow-gray-700 rounded-lg mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
