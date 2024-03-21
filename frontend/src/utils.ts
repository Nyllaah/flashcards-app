const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export const getRandomIds = (max: number): number[] => {
  const ids: number[] = [];
  for (let n = 1; n <= 15; n++) {
    const int = getRandomInt(max);
    if (!ids.some((id) => id === int)) {
      ids.push(getRandomInt(max));
    }
  }
  return ids;
};