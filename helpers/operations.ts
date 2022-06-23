import { Decimal } from 'decimal.js';

function average(numberToCalcAverage: number, average = 5.4): number {
  let a = new Decimal(average);
  let b = new Decimal(numberToCalcAverage);
  let c = new Decimal(100);
  let result = a.mul(b).dividedBy(c).toNumber();
  return result;
}

function subtract(a: number, b: number): number {
  let aDecimal = new Decimal(a);
  let bDecimal = new Decimal(b);
  let result = aDecimal.sub(bDecimal).toNumber();
  return result;
}

function add(a: number, b: number): number {
  let aDecimal = new Decimal(a);
  let bDecimal = new Decimal(b);
  let result = aDecimal.add(bDecimal).toNumber();
  return result;
}

export { average, subtract, add };
