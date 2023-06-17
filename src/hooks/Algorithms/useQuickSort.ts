import { useState } from "react";

const useQuickSort = (
  array: number[],
  setArray: (value: React.SetStateAction<number[]>) => void
) => {
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const partition = async (arr: number[], low: number, high: number) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 10));
    return i + 1;
  };

  const quickSort = async (arr: number[], low: number, high: number) => {
    if (low < high) {
      let pi = await partition(arr, low, high);
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
  };

  const quickSortHelper = async () => {
    setIsSorting(true);
    await quickSort(array, 0, array.length - 1);
    setIsSorting(false);
    setIsSorted(true);
  };

  return { quickSort: quickSortHelper, isSorting, isSorted, setIsSorted };
};

export default useQuickSort;
