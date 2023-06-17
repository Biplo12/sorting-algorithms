import React from "react";

interface IAlgorithmButtonProps {
  title: string;
  sortAlgorithm: () => void;
  isSorting?: boolean;
  isSorted?: boolean;
}

const AlgorithmButton: React.FC<IAlgorithmButtonProps> = ({
  title,
  sortAlgorithm,
  isSorting,
  isSorted,
}): JSX.Element => {
  return (
    <button
      className="bg-primary-button text-white py-2 px-4 rounded 
      hover:bg-primary-button-hover transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={sortAlgorithm}
      disabled={isSorting || isSorted}
    >
      {title}
    </button>
  );
};
export default AlgorithmButton;
