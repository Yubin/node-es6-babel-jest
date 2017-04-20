
export default function genData(arr, factor) {
  let f = factor || 1;

  return arr.map(number => number * f);
};
