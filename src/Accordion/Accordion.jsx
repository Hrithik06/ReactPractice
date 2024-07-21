import React, { useState } from "react";
const Accordion = ({title, content}) => {
    console.log(title);
    
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const handleClick = ()=>{
    setToggleAccordion(!toggleAccordion);
  }
  return (
    <div className="p-3 border border-gray-400 m-3">
      <div className="flex justify-between">
        <h3 className="font-semibold">
          {title}
        </h3>
        <button className="bg-gray-300 rounded-full w-10 h-10 text-xl text-white" onClick={handleClick}>
          {toggleAccordion ? "-" : "+"}
        </button>
      </div>
      {toggleAccordion && (
        <p className="text-sm my-3">
          {content}
        </p>
      )}
    </div>
  );
};

export default Accordion;
