const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export const getRandomIds = (max: number): number[] => {
  const ids: number[] = [];
  while (ids.length < 15) {
    const int = getRandomInt(max);
    
    if (!ids.includes(int)) {
      ids.push(int);
    }
  }
  return ids;
};