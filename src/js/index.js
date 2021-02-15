let btn1 = document.querySelector("#send1");
btn1.addEventListener("click", printToSend);
let btn2 = document.querySelector("#send2");
btn2.addEventListener("click", printToReceive);




function printToSend() {
  let valueToCalc = document.querySelector("#toCalc1").value;

  let porcentajeTotal = average(valueToCalc);
  porcentajeTotal = porcentajeTotal.toFixed(2);

  let receive = subtract(valueToCalc, porcentajeTotal);
  receive = receive.toFixed(2);

  document.querySelector("#average1").innerHTML = `<p>${porcentajeTotal}
  </p>`;

  document.querySelector("#resultReceive1").innerHTML = `<p>${receive}</p>`;
}

function printToReceive( ) {
 

  let valueToCalc = document.querySelector(".number2").value;
  valueToCalc = parseFloat( valueToCalc )

  let SubAverage = average( valueToCalc )
  
  let subTotalToSend =  add( SubAverage , valueToCalc )
  
  // console.log(subTotalToSend)

  let totalAverage = average( subTotalToSend, SubAverage )

  let totalToSend = add( valueToCalc, totalAverage )

  document.querySelector("#average2").innerHTML = `<p> ${ totalAverage.toFixed( 2 ) }</p>`;
  document.querySelector("#resultReceive2").innerHTML = `<p>${ totalToSend.toFixed( 2 ) }</p>`;
}
