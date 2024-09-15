import React from "react";

const NameCard = ({ name }) => {
  return (
    <div className="w-60 border rounded-lg border-gray-300 shadow-lg hover:scale-105 duration-500  px-10 py-5 text-center capitalize">
      {name}
    </div>
  );
};

export default NameCard;
