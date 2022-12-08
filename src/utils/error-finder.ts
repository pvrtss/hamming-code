import { decode } from "./decoder";

function getAllIndexes(arr: string[], val: string) {
  let indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

function makeVector(i: number) {
  let base = i.toString(2).split("").reverse();
  let len = base.length;
  for (let i = 0; i < 15 - len; i++) {
    base.push("0");
  }
  return base.reverse().join("");
}

export function makeReport(word: string) {
  const result = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];
  for (let i = 1; i < 2 ** 15; i++) {
    const w = word.split("");
    const verror = makeVector(i);
    // генерация вектора ошибки
    const ids = getAllIndexes(verror.split(""), "1");
    // подсчет кратности ошибки
    let ones = 0;
    verror.split("").map((l) => (l === "1" ? ones++ : ones + 0));
    // количество ошибок определенной кратности
    result[ones - 1][1]++;
    // "совершение" ошибки
    w.forEach((item, i) =>
      ids.includes(i) ? (w[i] = item === "1" ? "0" : "1") : (item)
    );
    // подсчет обнаружений
    if (decode(w.join("")) >= 0) result[ones - 1][0]++;
  }
  return result;
}
