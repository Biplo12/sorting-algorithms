import { useState } from "react";

const useCountingSort = (
  array: number[],
  setArray: (value: React.SetStateAction<number[]>) => void
) => {
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const countingSort = async () => {
    setIsSorting(true);
    let max = Math.max(...array);
    let min = Math.min(...array);
    let count = new Array(max - min + 1).fill(0);
    for (let i = 0; i < array.length; i++) {
      count[array[i] - min]++;
    }
    let z = 0;
    for (let i = min; i <= max; i++) {
      while (count[i - min] > 0) {
        array[z] = i;
        z++;
        count[i - min]--;
        setArray([...array]);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
    setIsSorting(false);
    setIsSorted(true);
  };

  return { countingSort, isSorting, isSorted, setIsSorted };
};

export default useCountingSort;
