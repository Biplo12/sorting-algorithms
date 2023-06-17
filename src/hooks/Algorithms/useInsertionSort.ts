import { useState } from "react";

const useInsertionSort = (
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const insertionSort = async () => {
    setIsSorting(true);
    for (let i = 1; i < array.length; i++) {
      let j = i - 1;
      let temp = array[i];
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        j--;
        await new Promise((resolve) => setTimeout(resolve, 0.0001));
        setArray([...array]);
      }
      array[j + 1] = temp;
    }
    setIsSorting(false);
    setIsSorted(true);
  };

  return { insertionSort, isSorting, isSorted, setIsSorted };
};

export default useInsertionSort;
