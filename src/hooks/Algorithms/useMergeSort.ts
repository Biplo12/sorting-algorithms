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
    let start = startIdx;
    let end = middleIdx + 1;
    while (start <= middleIdx && end <= endIdx) {
      if (array[start] > array[end]) {
        let temp = array[end];
        array.splice(end, 1);
        array.splice(start, 0, temp);
        start++;
        end++;
        setArray([...array]);
        await new Promise((resolve) => setTimeout(resolve, 25));
      } else {
        start++;
      }
    }
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

  const mergeSort = async () => {
    setIsSorting(true);
    await mergeSortHelper(array, 0, array.length - 1);
    setIsSorting(false);
    setIsSorted(true);
  };

  return { mergeSort, isSorting, isSorted, setIsSorted };
};

export default useMergeSort;
