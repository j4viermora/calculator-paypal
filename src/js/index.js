let btn1 = document.querySelector("#send1");
btn1.addEventListener("click", printToSend);

let btn2 = document.querySelector("#send2");
btn2.addEventListener("click", printToReceive);


function printToSend() {
  let valueToCalc = document.querySelector("#toCalc1").value;
 
  valueToCalc =  parseFloat(valueToCalc)


  let porcentajeTotal = average(valueToCalc)
  porcentajeTotal = parseFloat( porcentajeTotal.toFixed(2) ) 

  let receive = subtract(valueToCalc , porcentajeTotal)
  
  let resultToCalcAverage = document.querySelector('#average1');
  resultToCalcAverage.innerHTML = `<p>${porcentajeTotal}
  </p>`

  let resultToCalcReceive = document.querySelector('#resultReceive1')
  resultToCalcReceive.innerHTML = `<p>${receive}</p>`
}


function printToReceive() {
  let valueToCalc = document.querySelector("#toCalc2").value;
  valueToCalc = parseFloat( (valueToCalc ) )

  let subTotalAverage = average( valueToCalc )
  let subTotalToSend = add(valueToCalc, subTotalAverage)


  let totalAverage = average( subTotalToSend )
  totalAverage = parseFloat( totalAverage.toFixed(2) )

  let totalToSend = add (totalAverage,valueToCalc )
  totalToSend = totalToSend.toFixed(2)


  let resultAverage = document.querySelector('#average2')
  resultAverage.innerHTML =`<p> ${ totalAverage }</p>`


  let resultToCalcReceive = document.querySelector('#resultReceive2')
  resultToCalcReceive.innerHTML = `<p>${ totalToSend }</p>`

}
