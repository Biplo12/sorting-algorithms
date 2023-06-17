import useRandomArray from "@/hooks/useRandomArray";
import React from "react";

interface IRandomizeArrayButtonProps {
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
  isSorting?: boolean;
}

const RandomizeArrayButton: React.FC<IRandomizeArrayButtonProps> = ({
  setArray,
  isSorting,
}): JSX.Element => {
  const randomArrayOfNumbers = useRandomArray(100, 0, 100);
  const handleRandomizeArray = () => {
    setArray(randomArrayOfNumbers);
  };
  return (
    <button
      className="bg-secondary-button py-2 px-4 rounded 
      hover:bg-secondary-button-hover transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-90"
      onClick={handleRandomizeArray}
      disabled={isSorting}
    >
      Randomize Array
    </button>
  );
};
export default RandomizeArrayButton;
