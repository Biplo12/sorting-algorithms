import React from "react";
import Bars from "./Bars";
import AlgorithmButton from "./common/AlgorithmButton";
import RandomizeArrayButton from "./ToolBar/Partials/RandomizeArrayButton";
import StopButton from "./StopButton";
import SortingAlgorithHeader from "./SortingAlgorithHeader";
import ToolBar from "./ToolBar/ToolBar";

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
  const resetSortingStatus = () => {
    algorithms.forEach((algorithm) => {
      algorithm.setIsSorted(false);
    });
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-white">
      <SortingAlgorithHeader />
      <Bars array={array} />
      <div className="flex gap-3 flex-wrap justify-center items-center">
        <ToolBar
          algorithms={algorithms}
          randomizedArray={randomizedArray}
          setArray={setArray}
          resetSortingStatus={resetSortingStatus}
        />
      </div>
    </div>
  );
};
export default SortingAlgorithms;
