import { add, average, subtract } from './operations';

function printToSend(valueToCalc: string | number) {
  valueToCalc = Number(valueToCalc);

  const totalAverage = average(valueToCalc);
  const receive = subtract(valueToCalc, totalAverage);
  return {
    totalAverage,
    receive,
  };
}

function printToReceive(valueToCalc: string | number) {
  valueToCalc = Number(valueToCalc);
  const subAverage = average(valueToCalc);
  const subTotalToSend = add(subAverage, valueToCalc);
  const totalAverage = average(subTotalToSend + subAverage);
  const totalToSend = add(valueToCalc, totalAverage);

  return {
    totalToSend,
    totalAverage,
  };
}

export { printToReceive, printToSend };
