import { add, average, subtract } from "./functions";



function printToSend( valueToCalc ) {

  const porcentajeTotal = average(valueToCalc);
  const receive = subtract(valueToCalc, porcentajeTotal);

  return {
    porcentajeTotal,
    receive
  }

}

function printToReceive( valueToCalc ) {
 
  const subAverage = average( valueToCalc )
  const subTotalToSend =  add( subAverage , valueToCalc )
  const totalAverage = average( subTotalToSend, SubAverage )

  const totalToSend = add( valueToCalc, totalAverage )

  return {
    totalToSend,
    totalAverage
  }
  
}


export {
  printToReceive,
  printToSend
}