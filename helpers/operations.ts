function average(numberToCalcAverage: number, average = 5.4): number {
  let result = (average * numberToCalcAverage) / 100;
  return Number(result.toFixed(6));
}

function subtract(a: number, b: number): number {
  let result = a - b;
  return Number(result.toFixed(6));
}

function add(a: number, b: number): number {
  let result = a + b;
  return Number(result.toFixed(6));
}

export { average, subtract, add };
