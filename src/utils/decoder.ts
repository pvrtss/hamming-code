const conversionMatrix = [
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
];

export function decode(word: string) {
  const errorSyndrom: number[] = [];
  conversionMatrix.map((line) => {
    const prod: number[] = [];
    line.map((bit, index) => prod.push(bit * parseInt(word[index], 2)));
    return errorSyndrom.push(prod.reduce((sum, elem) => sum + elem) % 2);
  });
  errorSyndrom.reverse();
  const checksum = errorSyndrom.reduce((sum, elem) => sum + elem);
  return checksum ? parseInt(errorSyndrom.join(""), 2) - 1 : -1;
}
