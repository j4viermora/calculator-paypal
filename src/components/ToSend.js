import React, { useEffect, useState } from "react";
import { printToSend } from "../helpers/ResultToSendToReceive";
import { Button } from "./Button";

export const ToSend = () => {
  const [valueToCalc, setState] = useState("");
  const [result, setResult] = useState({});
  const { receive, porcentajeTotal } = result;

  const ifInitial = valueToCalc === "";

  const handleChange = ({ target }) => {
    setState(target.value);
  };

  useEffect(() => {
    const { receive, porcentajeTotal } = printToSend(valueToCalc);
    setResult( {
      ...result,
      receive,
      porcentajeTotal 
    } )
  }, [valueToCalc]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      valueToCalc,
      receive,
      totalAverage,
    });
  };

  return (
    <>
      <h2>Calculadora para enviar</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="number"
          placeholder="Enviar"
          value={valueToCalc}
          onChange={handleChange}
          style={{
            marginRight: '10px'
          }}
        />
        {/* <Button disabled={!valueToCalc && true}>Guardar</Button> */}
      </form>
        <h3>Comisión</h3>
          <input
          type='number'
          value={ ifInitial ? 0 : porcentajeTotal.toFixed(2)}
          />
        <h3>Recibes</h3>
          <input
          type='number'
          value={ ifInitial ? 0 : receive.toFixed(2) }
          />
    </>
  );
};
