import { useState } from "react";

const useMergeSort = (
  array: number[],
  setArray: (value: React.SetStateAction<number[]>) => void
) => {
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const merge = async (
    array: number[],
    startIdx: number,
    middleIdx: number,
    endIdx: number
  ) => {
    const sortedArray = [...array];

    let start = startIdx;
    let end = middleIdx + 1;
    let sortedIdx = startIdx;

    while (start <= middleIdx && end <= endIdx) {
      if (sortedArray[start] > sortedArray[end]) {
        array[sortedIdx] = sortedArray[end];
        end++;
      } else {
        array[sortedIdx] = sortedArray[start];
        start++;
      }
      sortedIdx++;
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, 5));
    }

    while (start <= middleIdx) {
      array[sortedIdx] = sortedArray[start];
      start++;
      sortedIdx++;
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, 5));
    }

    while (end <= endIdx) {
      array[sortedIdx] = sortedArray[end];
      end++;
      sortedIdx++;
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, 5));
    }
  };

  const mergeSort = async () => {
    setIsSorting(true);
    await mergeSortHelper(array, 0, array.length - 1);
    setIsSorting(false);
    setIsSorted(true);
  };

  const mergeSortHelper = async (
    array: number[],
    startIdx: number,
    endIdx: number
  ) => {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    await mergeSortHelper(array, startIdx, middleIdx);
    await mergeSortHelper(array, middleIdx + 1, endIdx);
    await merge(array, startIdx, middleIdx, endIdx);
  };

  return { mergeSort, isSorting, isSorted, setIsSorted };
};

export default useMergeSort;
