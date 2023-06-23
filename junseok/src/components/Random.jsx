import React, { useState } from "react";

const RangeInputContainer = ({
  minNumber,
  maxNumber,
  setMinNumber,
  setMaxNumber,
}) => {
  return (
    <div>
      <input
        type="number"
        placeholder="min"
        value={minNumber}
        onChange={(e) => setMinNumber(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="max"
        value={maxNumber}
        onChange={(e) => setMaxNumber(Number(e.target.value))}
      />
    </div>
  );
};

const Random = () => {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);
  const [result, setResult] = useState(0);
  const generateRandomNumberHandler = () => {
    if (
      minNumber > maxNumber ||
      minNumber < 1 ||
      minNumber > 100 ||
      maxNumber < 1 ||
      maxNumber > 100
    ) {
      return;
    }
    const randomNum = getRandomInt(minNumber, maxNumber);
    setResult(randomNum);
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div>
      <RangeInputContainer
        minNumber={minNumber}
        maxNumber={maxNumber}
        setMinNumber={setMinNumber}
        setMaxNumber={setMaxNumber}
      />
      <h1>{result}</h1>
      <button onClick={generateRandomNumberHandler}>랜덤 생성</button>
    </div>
  );
};

export default Random;
