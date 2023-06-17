import React from "react";

interface IBarsProps {
  array: number[];
}

const Bars: React.FC<IBarsProps> = ({ array }): JSX.Element => {
  return (
    <div className="flex justify-center items-center min-h-[500px]">
      {array.map((value, index) => (
        <div
          className="w-2 bg-primary-button mr-1 transition duration-150 ease-in-out"
          key={index}
          style={{ height: `${value * 5}px` }}
        />
      ))}
    </div>
  );
};
export default Bars;
