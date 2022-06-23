import Decimal from 'decimal.js';
import { add, average, subtract } from 'helpers';
import { useConfigComission } from './useConfigComission';

export const useCalComission = () => {
  const {
    config: {
      averagePaypalCommission: comissionPaypalPorcentage,
      paypalCommission,
    },
  } = useConfigComission();

  function calcToSend(valueToCalc: number) {
    valueToCalc = Number(valueToCalc.toFixed(6));
    let totalAverage = average(valueToCalc, comissionPaypalPorcentage);
    const receive = subtract(
      valueToCalc,
      new Decimal(totalAverage).add(paypalCommission).toNumber()
    );
    totalAverage = add(totalAverage, paypalCommission);

    let a = Number(totalAverage.toFixed(4));
    let b = Number(receive.toFixed(4));
    a = Number(a.toFixed(3));
    b = Number(b.toFixed(3));
    return {
      totalAverage: a.toFixed(2),
      receive: b.toFixed(2),
    };
  }
  // Esta funcion fue actualizada para utilizar los metodos que nos da la libreria decilam js

  function calcToReceive(valueToCalc: number) {
    let iWantRecieve = new Decimal(valueToCalc);
    let comissionPorcentage = new Decimal(comissionPaypalPorcentage);
    let comissionPaypal = new Decimal(paypalCommission);
    let hundred = new Decimal(100);
    let subAverage = comissionPorcentage
      .mul(iWantRecieve.add(comissionPaypal))
      .dividedBy(hundred)
      .add(comissionPaypal);

    let subtotalToSend = subAverage.add(iWantRecieve).add(paypalCommission);

    let totalAverage = comissionPorcentage
      .mul(subtotalToSend)
      .dividedBy(hundred)
      .add(comissionPaypal);

    let totalToSend = totalAverage.add(iWantRecieve);

    let a = Number(totalToSend.toFixed(3));
    let b = Number(totalAverage.toFixed(3));

    return {
      totalToSend: a.toFixed(2),
      totalAverage: b.toFixed(2),
    };
  }

  return {
    calcToSend,
    calcToReceive,
  };
};
