import React, { useState } from "react";
import useRandomArray from "./hooks/useRandomArray";
import useSelectionSort from "./hooks/Algorithms/useSelectionSort";
import useBubbleSort from "./hooks/Algorithms/useBubbleSort";
import useInsertionSort from "./hooks/Algorithms/useInsertionSort";
import useMergeSort from "./hooks/Algorithms/useMergeSort";
import useBogoSort from "./hooks/Algorithms/useBogoSort";
import useHeapSort from "./hooks/Algorithms/useHeapSort";
import useCountingSort from "./hooks/Algorithms/useCountingSort";
import SortingAlgorithms from "./components/SortingAlgorithms";
import useQuickSort from "./hooks/Algorithms/useQuickSort";
import useRadixSort from "./hooks/Algorithms/useRadixSort";

function App() {
  const randomizedArray = useRandomArray(100, 0, 100);
  const [array, setArray] = useState<number[]>(randomizedArray);

  const selectionSort = useSelectionSort(array, setArray);
  const bubbleSort = useBubbleSort(array, setArray);
  const insertionSort = useInsertionSort(array, setArray);
  const mergeSort = useMergeSort(array, setArray);
  const bogoSort = useBogoSort(array, setArray);
  const quickSort = useQuickSort(array, setArray);
  const heapSort = useHeapSort(array, setArray);
  const countingSort = useCountingSort(array, setArray);
  const radixSort = useRadixSort(array, setArray);

  const algorithms = [
    {
      key: "selectionSort",
      title: "Selection Sort",
      sortAlgorithm: selectionSort.selectionSort,
      isSorting: selectionSort.isSorting,
      isSorted: selectionSort.isSorted,
      setIsSorted: selectionSort.setIsSorted,
    },
    {
      key: "bubbleSort",
      title: "Bubble Sort",
      sortAlgorithm: bubbleSort.bubbleSort,
      isSorting: bubbleSort.isSorting,
      isSorted: bubbleSort.isSorted,
      setIsSorted: bubbleSort.setIsSorted,
    },
    {
      key: "insertionSort",
      title: "Insertion Sort",
      sortAlgorithm: insertionSort.insertionSort,
      isSorting: insertionSort.isSorting,
      isSorted: insertionSort.isSorted,
      setIsSorted: insertionSort.setIsSorted,
    },
    {
      key: "mergeSort",
      title: "Merge Sort",
      sortAlgorithm: mergeSort.mergeSort,
      isSorting: mergeSort.isSorting,
      isSorted: mergeSort.isSorted,
      setIsSorted: mergeSort.setIsSorted,
    },
    {
      key: "bogoSort",
      title: "Bogo Sort",
      sortAlgorithm: bogoSort.bogoSort,
      isSorting: bogoSort.isSorting,
      isSorted: bogoSort.isSorted,
      setIsSorted: bogoSort.setIsSorted,
    },
    {
      key: "quickSort",
      title: "Quick Sort",
      sortAlgorithm: quickSort.quickSort,
      isSorting: quickSort.isSorting,
      isSorted: quickSort.isSorted,
      setIsSorted: quickSort.setIsSorted,
    },
    {
      key: "heapSort",
      title: "Heap Sort",
      sortAlgorithm: heapSort.heapSort,
      isSorting: heapSort.isSorting,
      isSorted: heapSort.isSorted,
      setIsSorted: heapSort.setIsSorted,
    },
    {
      key: "countingSort",
      title: "Counting Sort",
      sortAlgorithm: countingSort.countingSort,
      isSorting: countingSort.isSorting,
      isSorted: countingSort.isSorted,
      setIsSorted: countingSort.setIsSorted,
    },
    {
      key: "radixSort",
      title: "Radix Sort",
      sortAlgorithm: radixSort.radixSort,
      isSorting: radixSort.isSorting,
      isSorted: radixSort.isSorted,
      setIsSorted: radixSort.setIsSorted,
    },
  ];

  return (
    <SortingAlgorithms
      algorithms={algorithms}
      array={array}
      setArray={setArray}
      randomizedArray={randomizedArray}
    />
  );
}

export default App;
