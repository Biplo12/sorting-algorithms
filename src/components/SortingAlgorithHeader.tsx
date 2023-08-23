import React from "react";
const SortingAlgorithHeader: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-white">
      <h1>
        <span className="text-2xl font-bold text-white">
          Sorting Algorithms
        </span>
      </h1>
      <p>
        <span className="text-lg">Click on an algorithm to sort the array</span>
      </p>
    </div>
  );
};
export default SortingAlgorithHeader;
