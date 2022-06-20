import { add, average, subtract } from 'helpers';
import { useConfigComission } from './useConfigComission';

export const useCalComission = () => {
  const {
    config: { averagePaypalCommission, paypalCommission },
  } = useConfigComission();

  function calcToSend(valueToCalc: number) {
    valueToCalc = Number(valueToCalc.toFixed(6));
    let totalAverage = average(valueToCalc, averagePaypalCommission);
    const receive = subtract(valueToCalc, totalAverage + paypalCommission);
    totalAverage = add(totalAverage, paypalCommission);
    return {
      totalAverage: Number(totalAverage.toFixed(2)),
      receive: Number(receive.toFixed(2)),
    };
  }

  function calcToReceive(valueToCalc: number) {
    valueToCalc = Number(valueToCalc.toFixed(6));
    let subAverage =
      average(valueToCalc, averagePaypalCommission) + paypalCommission;
    const subTotalToSend = add(subAverage, valueToCalc);
    let totalAverage =
      average(subTotalToSend, averagePaypalCommission) + paypalCommission;
    const totalToSend = add(valueToCalc, totalAverage);

    return {
      totalToSend: Number(totalToSend.toFixed(2)),
      totalAverage: Number(totalAverage.toFixed(2)),
    };
  }

  return {
    calcToSend,
    calcToReceive,
  };
};
