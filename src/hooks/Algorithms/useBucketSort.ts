import { useState } from "react";

const useBucketSort = (
  array: number[],
  setArray: (value: React.SetStateAction<number[]>) => void
) => {
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const bucketSort = async () => {
    setIsSorting(true);
    let n = array.length;
    let max = array[0];
    let min = array[0];
    for (let i = 1; i < n; i++) {
      if (array[i] > max) {
        max = array[i];
      }
      if (array[i] < min) {
        min = array[i];
      }
    }
    let bucket = [];
    for (let i = 0; i < n; i++) {
      bucket[i] = [];
    }
    for (let i = 0; i < n; i++) {
      let bucketIndex = Math.floor(((array[i] - min) / (max - min)) * (n - 1));
      bucket[bucketIndex].push(array[i]);
    }
    for (let i = 0; i < n; i++) {
      bucket[i].sort((a, b) => a - b);
    }
    let k = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < bucket[i].length; j++) {
        array[k++] = bucket[i][j];
        setArray([...array]);
        await new Promise((resolve) => setTimeout(resolve, 25));
      }
    }
    setIsSorting(false);
    setIsSorted(true);
  };

  return { bucketSort, isSorting, isSorted, setIsSorted };
};

export default useBucketSort;
