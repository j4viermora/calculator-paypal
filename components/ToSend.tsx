import React, { useEffect, useState } from 'react';
import { printToSend } from '../helpers';

export const ToSend = () => {
  const [valueToCalc, setState] = useState('');
  const [result, setResult] = useState({
    receive: 0,
    totalAverage: 0,
  });
  const { receive, totalAverage } = result;

  const ifInitial = valueToCalc === '';

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  useEffect(() => {
    const { receive, totalAverage } = printToSend(valueToCalc);
    setResult({
      ...result,
      receive,
      totalAverage,
    });
  }, [valueToCalc]);

  return (
    <>
      <article className='card'>
        <div className='card-content'>
          <h3 className='title'>Calculadora paypal para enviar dinero</h3>
          <form className='form'>
            <label htmlFor='send'>Enviar</label>
            <input
              className='input'
              id='send'
              onChange={(e) => handleChange(e)}
              placeholder='Enviar'
              type='number'
              value={valueToCalc}
            />
          </form>
          <label htmlFor='comision'>Comisión</label>
          <input
            className='input'
            id='comision'
            type='number'
            value={ifInitial ? 0 : totalAverage.toFixed(2)}
          />
          <label htmlFor='received'>Recibes</label>
          <input
            className='input'
            id='received'
            type='number'
            value={ifInitial ? 0 : receive.toFixed(2)}
          />
        </div>
      </article>
    </>
  );
};
