import { useState } from "react";

const Accordion = ({ title, content, isActive, onShow }) => {
  const [show, setShow] = useState(false)
  const handleClick = ()=>{
    onShow();
    setShow(!show)
  }
  return (
    <div className="p-3 border border-gray-400 m-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{title}</h3>
        <button
          className="bg-gray-300 rounded-full w-10 h-10 text-xl text-white"
          onClick={handleClick}
        >
          {isActive && show ? "-" : "+"}
        </button>
      </div>
      {isActive && show && <p className="text-sm my-3">{content}</p>}
    </div>
  );
};

export default Accordion;
