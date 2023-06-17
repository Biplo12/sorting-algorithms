import { useState } from "react";

const useHeapSort = (
  array: number[],
  setArray: (value: React.SetStateAction<number[]>) => void
) => {
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const heapify = async (arr: number[], n: number, i: number) => {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }
    if (largest !== i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 10));
      await heapify(arr, n, largest);
    }
  };

  const heapSort = async (arr: number[], n: number) => {
    for (let i = n / 2 - 1; i >= 0; i--) {
      await heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 10));
      await heapify(arr, i, 0);
    }
  };

  const heapSortHelper = async () => {
    setIsSorting(true);
    await heapSort(array, array.length);
    setIsSorting(false);
    setIsSorted(true);
  };

  return { heapSort: heapSortHelper, isSorting, isSorted, setIsSorted };
};

export default useHeapSort;
