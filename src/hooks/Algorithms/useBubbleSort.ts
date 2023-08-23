import { useState } from "react";

const useBubbleSort = (
  array: number[],
  setArray: (value: React.SetStateAction<number[]>) => void
) => {
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [sortingStopped, setSortingStopped] = useState(false);

  const bubbleSort = async () => {
    setIsSorting(true);

    for (let i = 0; i < array.length; i++) {
      let swapped = false;

      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j + 1] < array[j]) {
          let temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;
          swapped = true;
        }
        setArray([...array]);
      }

      await new Promise((resolve) => setTimeout(resolve, 25));

      if (!swapped) {
        break;
      }

      if (sortingStopped) {
        break;
      }
    }

    setIsSorting(false);
    setIsSorted(true);
  };

  return { bubbleSort, isSorting, isSorted, setIsSorted, setSortingStopped };
};

export default useBubbleSort;
