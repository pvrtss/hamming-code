# Калькулятор кода Хэмминга

Опробовать калькулятор можно нажав [по ссылке](pvrtss.github.io/hamming-code/)

## Алгоритмы

### Кодирование

Алгоритм кодирования представлен ниже:

```typescript
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
  return dataBits.join("");
}
```

### Декодирование

```typescript
// `conversionMatrix` используется из предыдущего алгоритма
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
```

### Проверка проверяющей способности

Находится в [этом файле](src/utils/error-finder.ts)
