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
  
  let resultToCalcAverage = document.querySelector('#result1');
  resultToCalcAverage.innerHTML = `<p>${porcentajeTotal}
  </p>`

  let resultToCalcReceive = document.querySelector('#resultReceive1')
  resultToCalcReceive.innerHTML = `<p>${receive}</p>`
}


function printToReceive() {
  let valueToCalc = document.querySelector("#toCalc2").value;
  valueToCalc = parseFloat( valueToCalc )

  let porcentajeTotal = average(valueToCalc)
  porcentajeTotal = parseFloat( porcentajeTotal.toFixed(2) ) 


  let receive = add(valueToCalc , porcentajeTotal)
  receive = parseFloat(  receive.toFixed( 2 )
  )

  let resultToCalcAverage = document.querySelector('#result2');
  resultToCalcAverage.innerHTML = `<p>${porcentajeTotal}
  </p>`

  let resultToCalcReceive = document.querySelector('#resultReceive2')
  resultToCalcReceive.innerHTML = `<p>${receive}</p>`
}


