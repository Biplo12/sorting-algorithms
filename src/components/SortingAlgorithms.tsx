import React from "react";
import Bars from "./Bars";
import AlgorithmButton from "./common/AlgorithmButton";
import RandomizeArrayButton from "./RandomizeArrayButton";
import StopButton from "./StopButton";

interface ISortingAlgorithmsProps {
  algorithms: {
    key: string;
    title: string;
    sortAlgorithm: () => void;
    isSorting: boolean;
    isSorted: boolean;
    setIsSorted: (isSorted: boolean) => void;
  }[];

  randomizedArray: number[];
  setArray: (array: number[]) => void;
  array: number[];
}

const SortingAlgorithms: React.FC<ISortingAlgorithmsProps> = ({
  algorithms,
  randomizedArray,
  setArray,
  array,
}): JSX.Element => {
  const anyAlgorithmSorting = algorithms.some(
    (algorithm) => algorithm.isSorting
  );
  let anyAlgorithmSorted = algorithms.some((algorithm) => algorithm.isSorted);

  const resetSortingStatus = () => {
    algorithms.forEach((algorithm) => {
      algorithm.setIsSorted(false);
    });
  };

  const handleRandomizeArray = () => {
    setArray(randomizedArray);
    resetSortingStatus();
  };
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
      <div className="flex flex-col justify-center items-center gap-10">
        <Bars array={array} setArray={setArray} />
      </div>
      <div className="flex gap-3 flex-wrap justify-center items-center">
        {algorithms.map((algorithm) => (
          <div
            className="flex flex-col justify-center items-center gap-3"
            key={algorithm.key}
          >
            <AlgorithmButton
              key={algorithm.title}
              title={algorithm.title}
              sortAlgorithm={algorithm.sortAlgorithm}
              isSorting={anyAlgorithmSorting}
              isSorted={anyAlgorithmSorted}
            />
          </div>
        ))}
        <RandomizeArrayButton
          setArray={handleRandomizeArray}
          isSorting={anyAlgorithmSorting}
        />
      </div>

      <div className="h-12">
        {anyAlgorithmSorting && <StopButton isSorting={anyAlgorithmSorting} />}
      </div>
    </div>
  );
};
export default SortingAlgorithms;
