import React from "react";

interface IAlgorithmButtonProps {
  title: string;
  sortAlgorithm: () => void;
  isSorting?: boolean;
  isSorted?: boolean;
  handleOpenToolBar?: () => void;
}

const AlgorithmButton: React.FC<IAlgorithmButtonProps> = ({
  title,
  sortAlgorithm,
  isSorting,
  isSorted,
  handleOpenToolBar,
}): JSX.Element => {
  const handleClick = () => {
    sortAlgorithm();
    if (handleOpenToolBar) {
      handleOpenToolBar();
    }
  };
  return (
    <button
      className="bg-primary-button text-white py-2 px-4 rounded transition text-sm duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-90 mxlg:h-16 border-r border-white border-opacity-10"
      onClick={handleClick}
      disabled={isSorting || isSorted}
    >
      {title}
    </button>
  );
};
export default AlgorithmButton;
