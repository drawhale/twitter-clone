export const chunk = <T>(data: T[] = [], size: number = 1) => {
  const arr = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
};
