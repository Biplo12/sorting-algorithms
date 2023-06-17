import React, { useState } from "react";

const useRadixSort = (
  array: number[],
  setArray: (value: React.SetStateAction<number[]>) => void
) => {
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const radixSort = async () => {
    setIsSorting(true);
    let max = Math.max(...array);
    let sorted = false;

    for (let i = 1; max / i > 0 && !sorted; i *= 10) {
      let buckets: number[][] = Array.from({ length: 10 }, () => []);
      sorted = true;

      for (let j = 0; j < array.length; j++) {
        buckets[Math.floor(array[j] / i) % 10].push(array[j]);
        if (j < array.length - 1 && array[j] > array[j + 1]) {
          sorted = false;
        }
      }

      if (sorted) {
        break;
      }

      let k = 0;
      for (let j = 0; j < buckets.length; j++) {
        for (let l = 0; l < buckets[j].length; l++) {
          await new Promise((resolve) => setTimeout(resolve, 10));
          array[k++] = buckets[j][l];
          setArray([...array]);
        }
      }
    }

    setIsSorting(false);
    setIsSorted(true);
  };

  return { radixSort, isSorting, isSorted, setIsSorted };
};

export default useRadixSort;
