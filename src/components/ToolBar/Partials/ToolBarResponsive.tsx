import React from "react";

import AlgorithmButton from "@/components/common/AlgorithmButton";
import RandomizeArrayButton from "@/components/ToolBar/Partials/RandomizeArrayButton";

interface IToolBarResponsiveProps {
  toolBarOpened: boolean;
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
  handleOpenToolBar: () => void;
}

const ToolBarResponsive: React.FC<IToolBarResponsiveProps> = ({
  toolBarOpened,
  algorithms,
  randomizedArray,
  setArray,
  resetSortingStatus,
  handleOpenToolBar,
}): JSX.Element => {
  const anyAlgorithmSorting = algorithms.some(
    (algorithm) => algorithm.isSorting
  );

  let anyAlgorithmSorted = algorithms.some((algorithm) => algorithm.isSorted);

  const handleRandomizeArray = () => {
    setArray(randomizedArray);
    resetSortingStatus();
  };
  return (
    <>
      {toolBarOpened && (
        <div className="fixed bottom-[4.35rem] left-0 flex w-full flex-col gap-2 bg-[#737374] p-2">
          {algorithms.map((algorithm) => (
            <AlgorithmButton
              key={algorithm.title}
              title={algorithm.title}
              sortAlgorithm={algorithm.sortAlgorithm}
              isSorting={anyAlgorithmSorting}
              isSorted={anyAlgorithmSorted}
              handleOpenToolBar={handleOpenToolBar}
            />
          ))}
          <RandomizeArrayButton setArray={handleRandomizeArray} />
        </div>
      )}
    </>
  );
};
export default ToolBarResponsive;
