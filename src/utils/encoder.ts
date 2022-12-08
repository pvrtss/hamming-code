const conversionMatrix = [
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
];

export function encode(word: string) {
  const correctingBitsMap = [0, 1, 3, 7];
  const dataBits: any[] = word.trim().replace(/ +/g, "").split("");
  const correctingBits: number[] = [];
  correctingBitsMap.map((i) => dataBits.splice(i, 0, "0"));
  conversionMatrix.map((line) => {
    const prod: number[] = [];
    line.map((bit, index) => prod.push(bit * parseInt(dataBits[index], 2)));
    return correctingBits.push(prod.reduce((sum, elem) => sum + elem) % 2);
  });
  correctingBits.reverse();
  dataBits.forEach((item, i) =>
    correctingBitsMap.includes(i)
      ? (dataBits[i] = correctingBits.pop()?.toString())
      : (dataBits[i] = item)
  );
  return dataBits.join('');
}
