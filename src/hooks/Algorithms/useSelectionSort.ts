import { useState, useEffect } from "react";

const useSelectionSort = (
  array: number[],
  setArray: (value: React.SetStateAction<number[]>) => void
) => {
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const selectionSort = async () => {
    setIsSorting(true);
    for (let i = 0; i < array.length; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, 25));
    }
    setIsSorting(false);
    setIsSorted(true);
  };

  return { selectionSort, isSorting, isSorted, setIsSorted };
};

export default useSelectionSort;
