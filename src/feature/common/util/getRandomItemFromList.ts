export const getRandomItemFromList = <T extends object>(list: Array<T>) => {
  return list[Math.floor(Math.random() * list.length)];
};
