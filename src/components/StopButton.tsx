import React from "react";

interface ISortButtonProps {
  isSorting: boolean;
}

const StopButton: React.FC<ISortButtonProps> = ({ isSorting }): JSX.Element => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-8 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={() => {
        window.location.reload();
      }}
      disabled={!isSorting}
    >
      Stop
    </button>
  );
};
export default StopButton;
