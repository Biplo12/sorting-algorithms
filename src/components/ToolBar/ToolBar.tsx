import React, { useState } from "react";
import AlgorithmButton from "../common/AlgorithmButton";
import RandomizeArrayButton from "./Partials/RandomizeArrayButton";
import ToolBarResponsive from "./Partials/ToolBarResponsive";
import ToolBarResponsiveButton from "./Partials/ToolBarResponsiveButton";
import StopButton from "../StopButton";

interface IToolBarProps {
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
  resetSortingStatus: () => void;
}

const ToolBar: React.FC<IToolBarProps> = ({
  algorithms,
  randomizedArray,
  setArray,
  resetSortingStatus,
}): JSX.Element => {
  const [toolBarOpened, setToolBarOpened] = useState(false);

  const anyAlgorithmSorting = algorithms.some(
    (algorithm) => algorithm.isSorting
  );
  let anyAlgorithmSorted = algorithms.some((algorithm) => algorithm.isSorted);

  const handleRandomizeArray = () => {
    setArray(randomizedArray);
    resetSortingStatus();
  };

  const handleOpenToolBar = () => {
    setToolBarOpened(!toolBarOpened);
  };

  return (
    <div className="z-50 w-full">
      <div className="mxlg:hidden fixed bottom-6 left-1/2 flex h-[65px] w-full max-w-[1025px] -translate-x-1/2 transform items-center justify-center gap-2 rounded-md bg-secondary-button p-1.5">
        {algorithms.map((algorithm) => (
          <AlgorithmButton
            key={algorithm.title}
            title={algorithm.title}
            sortAlgorithm={algorithm.sortAlgorithm}
            isSorting={anyAlgorithmSorting}
            isSorted={anyAlgorithmSorted}
          />
        ))}
        <StopButton isSorting={anyAlgorithmSorting} />
        <RandomizeArrayButton setArray={handleRandomizeArray} />
      </div>
      <ToolBarResponsive
        toolBarOpened={toolBarOpened}
        algorithms={algorithms}
        randomizedArray={randomizedArray}
        setArray={setArray}
        resetSortingStatus={resetSortingStatus}
        handleOpenToolBar={handleOpenToolBar}
      />
      <ToolBarResponsiveButton handleOpenToolBar={handleOpenToolBar} />
    </div>
  );
};
export default ToolBar;
