import useRandomArray from "@/hooks/useRandomArray";
import React from "react";
import { Tooltip } from "react-tooltip";

interface IRandomizeArrayButtonProps {
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
}

const RandomizeArrayButton: React.FC<IRandomizeArrayButtonProps> = ({
  setArray,
}): JSX.Element => {
  const randomArrayOfNumbers = useRandomArray(100, 0, 100);
  const handleRandomizeArray = () => {
    window.location.reload();
    setArray(randomArrayOfNumbers);
  };
  return (
    <>
      <Tooltip
        id="randomize-array"
        place="top"
        style={{
          backgroundColor: "#171c1b",
        }}
      >
        <div className="text-center text-xs">
          <p className="font-bold">
            Randomize Array
            <br />
            <span className="font-normal text-gray-400">(Spacebar)</span>
          </p>
        </div>
      </Tooltip>
      <button
        onClick={handleRandomizeArray}
        className="flex items-center justify-center gap-3 rounded-md px-4 py-2 bg-secondary-button mxlg:h-16"
        data-tip
        data-tooltip-id="randomize-array"
      >
        <h1 className="mxlg:flex hidden">Randomize</h1>
        <img src="/reroll.svg" alt="reroll icon" className="w-12 h-12" />
      </button>
    </>
  );
};
export default RandomizeArrayButton;
