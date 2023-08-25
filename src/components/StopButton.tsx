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
        className="bg-primary-button text-white py-2 px-8 rounded transition text-sm duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed brightness-75 mxlg:h-16 border-r border-white border-opacity-10 hover:border-opacity-20"
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
