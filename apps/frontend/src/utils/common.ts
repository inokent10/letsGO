
const getRandomInteger = (a: number, b: number) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = <T>(arr: T[]) => arr[getRandomInteger(0, arr.length - 1)];

export {
  getRandomInteger,
  getRandomElement,
};