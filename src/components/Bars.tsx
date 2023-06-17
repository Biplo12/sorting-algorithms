import React, { useEffect, useState } from "react";

interface IBarsProps {
  array: number[];
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
}

const Bars: React.FC<IBarsProps> = ({ array, setArray }): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [barsNumber, setBarsNumber] = useState<number>(array.length);
  const sortedArray = [...array].sort((a, b) => a - b);

  const calculateColor = (value: number): string => {
    const max = sortedArray[sortedArray.length - 1];
    const min = sortedArray[0];
    const percentage = (value - min) / (max - min);
    return `hsl(${percentage * 50}, 100%, 50%)`;
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setBarsNumber(Math.floor(windowWidth / 20));
  }, [windowWidth]);

  return (
    <div className="flex justify-center items-end min-h-[500px]">
      {array.map((value, index) => {
        const halfHeight = (value * 5) / 2;
        const remainingHeight = value * 5 - halfHeight;

        return (
          <div
            className="w-2 mr-1 transition duration-150 ease-in-out"
            key={index}
            style={{
              height: `${halfHeight}px`,
            }}
          >
            <div
              className="w-full h-[1px]"
              style={{
                height: `${remainingHeight}px`,
                backgroundColor: calculateColor(value),
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Bars;
