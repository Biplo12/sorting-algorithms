const useRandomArray = (length: number, min: number, max: number): number[] => {
  const randomArray = (length: number, min: number, max: number): number[] => {
    let array: number[] = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
  };

  return randomArray(length, min, max);
};

export default useRandomArray;
