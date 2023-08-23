import React from "react";
import { Tooltip } from "react-tooltip";

interface ISortButtonProps {
  isSorting: boolean;
}

const StopButton: React.FC<ISortButtonProps> = ({ isSorting }): JSX.Element => {
  return (
    <>
      <Tooltip
        id="stop-sorting"
        place="top"
        style={{
          backgroundColor: "#171c1b",
        }}
      >
        <div className="text-center text-xs">
          <p className="font-bold">
            Stop sorting
            <br />
            <span className="font-normal text-gray-400">(Esc)</span>
          </p>
        </div>
      </Tooltip>
      <button
        className="text-white font-bold py-2 px-8 rounded disabled:opacity-50 disabled:cursor-not-allowed bg-secondary-button brightness-90"
        onClick={() => window.location.reload()}
        disabled={!isSorting}
        data-tip
        data-tooltip-id="stop-sorting"
      >
        Stop
      </button>
    </>
  );
};
export default StopButton;
