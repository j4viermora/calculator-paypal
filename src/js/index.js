let btn1 = document.querySelector("#send1");

btn1.addEventListener("click", printToSend);

let btn2 = document.querySelector("#send2");

btn2.addEventListener("click", printToReceive);



function printToSend() {
  let valueToCalc = document.querySelector("#toCalc1").value;

  let porcentajeTotal = average(valueToCalc)
  porcentajeTotal = porcentajeTotal.toFixed(2)

  let receive = subtract(valueToCalc , porcentajeTotal)

  let resultToCalcAverage = document.querySelector('#result1');
  resultToCalcAverage.innerHTML = `<p>${porcentajeTotal}
  </p>`

  let resultToCalcReceive = document.querySelector('#resultReceive1')

  resultToCalcReceive.innerHTML = `<p>${receive}</p>`
}


function printToReceive() {
  let valueToCalc = document.querySelector("#toCalc2").value;
  console.log(typeof valueToCalc)
  valueToCalc = parseInt(valueToCalc)

  let porcentajeTotal = average(valueToCalc)
  porcentajeTotal = porcentajeTotal.toFixed(2)
  porcentajeTotal = parseFloat(porcentajeTotal)


  console.log(typeof valueToCalc, typeof porcentajeTotal)
  console.log(porcentajeTotal)
  console.log(add(valueToCalc, porcentajeTotal))
  let receive = add(valueToCalc , porcentajeTotal)
    
  console.log(receive)

  let resultToCalcAverage = document.querySelector('#result2');
  resultToCalcAverage.innerHTML = `<p>${porcentajeTotal}
  </p>`

  let resultToCalcReceive = document.querySelector('#resultReceive2')

  resultToCalcReceive.innerHTML = `<p>${receive}</p>`
}





function average(numeroAlCualSeLeSacaraElPorcentaje){
  return (5.4 * numeroAlCualSeLeSacaraElPorcentaje) / 100 + 0.3;
};

function subtract(a,b) {
  return a - b
}

function add(a,b) {
  return a + b 
}

