import React, { useEffect, useState } from 'react';
import { printToReceive } from '../helpers';

export const ToReceived = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState({
    totalAverage: 0,
    totalToSend: 0,
  });
  const { totalAverage, totalToSend } = result;

  const ifInitial = value === '';

  useEffect(() => {
    const { totalToSend, totalAverage } = printToReceive(
      value.replace(',', '.')
    );

    setResult({
      ...result,
      totalAverage,
      totalToSend,
    });
  }, [value]);

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(target.value);
  };

  return (
    <>
      <article className='card'>
        <div className='card-content'>
          <h3 className='title'>Calculadora paypal para recibir pagos</h3>
          <form className='form'>
            <label htmlFor='toReceive'>Para recibir</label>
            <input
              className='input'
              name='toReceive'
              onChange={handleChange}
              placeholder='Para recibir'
              type='number'
              value={value}
            />
          </form>
          <label htmlFor='comission'>Comisión</label>
          <input
            className='input'
            id='comission'
            type='number'
            value={ifInitial ? 0 : totalAverage.toFixed(2)}
          />
          <label htmlFor='amounToSend'>Debo enviar</label>
          <input
            className='input'
            id='amounToSend'
            type='number'
            value={ifInitial ? 0 : totalToSend.toFixed(2)}
          />
        </div>
      </article>
    </>
  );
};
