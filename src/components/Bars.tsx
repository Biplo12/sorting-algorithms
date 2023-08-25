import React, { useEffect, useState } from "react";

interface IBarsProps {
  array: number[];
}

const Bars: React.FC<IBarsProps> = ({ array }): JSX.Element => {
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
              className="w-full h-[1px] bg-[#42db1f]"
              style={{
                height: `${remainingHeight}px`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Bars;
