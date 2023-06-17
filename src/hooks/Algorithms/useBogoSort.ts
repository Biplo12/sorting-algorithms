import { useState } from "react";

const useBogoSort = (
  array: number[],
  setArray: (value: React.SetStateAction<number[]>) => void
) => {
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const bogoSort = async () => {
    setIsSorting(true);
    while (!isSorted) {
      for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * array.length);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        setArray([...array]);
        await new Promise((resolve) => setTimeout(resolve, 0.1));
      }
      setIsSorted(true);
    }
    setIsSorting(false);
  };

  return { bogoSort, isSorting, isSorted, setIsSorted };
};

export default useBogoSort;
