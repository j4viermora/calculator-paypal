import React from "react";
import { printToSend } from "../helpers/ResultToSendToReceive";
import { Button } from "./Button";

export const ToSend = () => {
  const [valueToCalc, setState] = React.useState("");
  const [totalAverage, setAverage] = React.useState("");
  const [receive, setReceive] = React.useState("");
  const handleChange = ({ target }) => {
    setState(target.value);
  };

  React.useEffect(() => {
    const { receive, porcentajeTotal } = printToSend(valueToCalc);
    setAverage(porcentajeTotal);
    setReceive(receive);
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
        />
        <Button disabled={!valueToCalc && true}>Guardar</Button>
      </form>
      <h3>Comisión</h3>
      <p>{valueToCalc === "" ? 0 : totalAverage.toFixed(2)}</p>
      <h3>Recibes</h3>
      <p>{valueToCalc === "" ? 0 : receive}</p>
    </>
  );
};
