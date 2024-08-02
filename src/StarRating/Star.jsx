import React,{useState} from "react";

const Star = () => {
    const [fill, setFill] = useState(false)
  return (
    <div>
      <span onMouseLeave={()=>setFill(!fill)}>{fill? "\u2605":"\u2606"}</span>
      {/* <span>{"\u2605"}</span> */}
    </div>
  );
};

export default Star;
