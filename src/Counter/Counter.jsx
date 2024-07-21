import React,{ useState } from "react";
import Navbar from "../components/Navbar";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [incrDecrBy, setIncrDecrBy] = useState(1);
    // console.log(typeof counter);
    // console.log(typeof incrDecrBy);
    
    const handleInput = (e) =>{
        console.log(e.target.value);
        setIncrDecrBy(Number(e.target.value))
        
    }



    const handleIncr = ()=>{
        setCounter(counter+incrDecrBy);
    
    }
    const handleDecr = ()=>{
        setCounter(counter-incrDecrBy);
    
    }

    const handleReset = ()=>{
        setCounter(0);
    }
  return (
    <>
      <Navbar text={'Counter'}/>
      <div className="flex items-center flex-col gap-2 p-2">
        <p className="font-semibold text-2xl">{counter?counter:0}</p>
        <div>
          <button onClick={handleDecr} className="px-2 m-1 text-center border border-black bg-gray-200">
            -
          </button>
          <button onClick={handleIncr} className="px-2 m-1 text-center border border-black bg-gray-200">
            +
          </button>
        </div>
        <div>
          <label htmlFor="input">Increment/Decrement by </label>
          <input type="number" id="input" className="border-black border px-2 py-1" value={incrDecrBy} onChange={handleInput}/>
        </div>
        <button onClick={handleReset} className="px-2 m-1 text-center border border-black bg-gray-200">
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
