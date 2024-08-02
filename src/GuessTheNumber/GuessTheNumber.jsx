import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const GuessTheNumber = () => {
  const [inputNumber, setInputNumber] = useState(1);
  const [randomNumber, setRandomNumber] = useState(1);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const randomGenerator=()=>{
    return Math.floor(Math.random() * (100)) + 1;
  }

  const handleChange = (e) => {
    if( e.target.value.length===0){
    setInputNumber(1);
    console.log("hello");
    

    }
    
    setInputNumber(e.target.value);
    e.target.blur();
    console.log(inputNumber);
    
  };
  const handleReset =()=>{
    setShowMessage(false)
    setInputNumber(1)
  }

  const handleClick =()=>{
    setShowMessage(true)
if(inputNumber<randomNumber){
  setMessage('Less')
}
else if(inputNumber>randomNumber){
  setMessage('Higher')
}else{
  setMessage('right')
}

  }

useEffect(()=>{
  setRandomNumber(randomGenerator());

},[])


  return (
    <>
      <Navbar text={"Guess the number"} />
      <div className="max-w-fit mx-auto my-10 text-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-6"
        >
          <label htmlFor="numberInput">Guess a Number between 0 and 100</label>
          <input
            id="numberInput"
            type="number"
            min="0"
            max="100"
            placeholder="Guess-Number"

            value={inputNumber}
            className="min-w-96 border border-black p-2 text-center"
            onChange={(e) => handleChange(e)}
          />
          <div className="flex justify-around">
            <button className="bg-gray-100 px-16 py-2" onClick={handleReset}>Reset</button>
            <button className="bg-gray-100 px-16 py-2" onClick={handleClick}>Check</button>
          </div>
          {/* {console.log(randomNumber)} */}
          { showMessage&&<p>Your guess is <span className="font-semibold">{message}</span> than the actual number</p>}
        </form>
      </div>
    </>
  );
};

export default GuessTheNumber;
