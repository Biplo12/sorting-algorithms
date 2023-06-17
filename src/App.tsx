import React, { useEffect, useState } from "react";
import AlgorithmButton from "@/components/common/AlgorithmButton";
import useRandomArray from "./hooks/useRandomArray";
import useSelectionSort from "./hooks/Algorithms/useSelectionSort";
import Bars from "./components/Bars";
import RandomizeArrayButton from "./components/RandomizeArrayButton";
import useBubbleSort from "./hooks/Algorithms/useBubbleSort";
import useInsertionSort from "./hooks/Algorithms/useInsertionSort";
import useMergeSort from "./hooks/Algorithms/useMergeSort";
import useBogoSort from "./hooks/Algorithms/useBogoSort";

function App() {
  const randomizedArray = useRandomArray(100, 0, 100);
  const [array, setArray] = useState<number[]>(randomizedArray);

  const selectionSort = useSelectionSort(array, setArray);
  const bubbleSort = useBubbleSort(array, setArray);
  const insertionSort = useInsertionSort(array, setArray);
  const mergeSort = useMergeSort(array, setArray);
  const bogoSort = useBogoSort(array, setArray);

  const algorithms = [
    {
      key: "selectionSort",
      title: "Selection Sort",
      sortAlgorithm: selectionSort.selectionSort,
      isSorting: selectionSort.isSorting,
      isSorted: selectionSort.isSorted,
      setIsSorted: selectionSort.setIsSorted,
    },
    {
      key: "bubbleSort",
      title: "Bubble Sort",
      sortAlgorithm: bubbleSort.bubbleSort,
      isSorting: bubbleSort.isSorting,
      isSorted: bubbleSort.isSorted,
      setIsSorted: bubbleSort.setIsSorted,
    },
    {
      key: "insertionSort",
      title: "Insertion Sort",
      sortAlgorithm: insertionSort.insertionSort,
      isSorting: insertionSort.isSorting,
      isSorted: insertionSort.isSorted,
      setIsSorted: insertionSort.setIsSorted,
    },
    {
      key: "mergeSort",
      title: "Merge Sort",
      sortAlgorithm: mergeSort.mergeSort,
      isSorting: mergeSort.isSorting,
      isSorted: mergeSort.isSorted,
      setIsSorted: mergeSort.setIsSorted,
    },
    {
      key: "bogoSort",
      title: "Bogo Sort",
      sortAlgorithm: bogoSort.bogoSort,
      isSorting: bogoSort.isSorting,
      isSorted: bogoSort.isSorted,
      setIsSorted: bogoSort.setIsSorted,
    },
  ];

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
    <>
      <div className="w-full min-h-[100vh] h-auto flex justify-center items-center bg-background flex-col gap-20">
        <div className="flex flex-col justify-center items-center gap-10">
          <Bars array={array} />
        </div>
        <div className="flex gap-3">
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
      </div>
    </>
  );
}

export default App;
