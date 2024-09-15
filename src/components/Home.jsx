import React from "react";
import { Link } from "react-router-dom";
import NameCard from "./NameCard";
import Navbar from "./Navbar";
const Home = () => {
  const cardList = [
    {
      name: "counter",
      to: "/counter",
    },
    {
      name: "Image Gallery",
      to: "/image-gallery",
    },
    {
      name: "Accordion Container",
      to: "/accordion-container",
    },
    {
      name: "Guess The Number",
      to: "/guess-number",
    },
    {
      name: "Star Rating",
      to: "/star-rating",
    },
  ];
  return (
    <div>
      <Navbar text={"Frontend Challenges"} />
      <div className="flex flex-wrap gap-4 max-w-5xl mx-auto">
        {cardList.map((card) => (
          <Link to={card.to}>
            <NameCard name={card.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
