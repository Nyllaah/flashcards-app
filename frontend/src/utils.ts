const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export const getRandomIds = (max: number): number[] => {
  const ids: number[] = [];
  for (let n = 1; n <= 15; n++) {
    ids.push(getRandomInt(max));
  }
  return ids;
};