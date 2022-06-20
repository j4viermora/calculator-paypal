import React, { useEffect, useState } from 'react';
import { AiFillCopy } from 'react-icons/ai';
import { useCalComission } from 'hooks';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';

export const ToSend = () => {
  const { calcToSend } = useCalComission();
  const [valueToCalc, setState] = useState('');
  const [result, setResult] = useState({
    receive: 0,
    totalAverage: 0,
  });
  const { receive, totalAverage } = result;
  const ifInitial = valueToCalc === '';

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setState(target.value);
  };

  const resetForm = () => {
    setState('');
    setResult({
      receive: 0,
      totalAverage: 0,
    });
  };

  useEffect(() => {
    const { receive, totalAverage } = calcToSend(
      Number(valueToCalc.replace(',', '.'))
    );
    setResult((prev) => ({
      ...prev,
      receive,
      totalAverage: totalAverage,
    }));
  }, [valueToCalc, calcToSend]);

  const onCopy = () => {
    toast.success('Copiado al portapapeles');
  };

  return (
    <>
      <article className='card pb-5'>
        <div className='card-content '>
          <h3 className='title is-size-5-mobile'>
            Calculadora paypal para enviar dinero
          </h3>
          <div className='field'>
            <label htmlFor='send'>Enviar</label>
            <div className='control'>
              <input
                className='input'
                id='send'
                onChange={(e) => handleChange(e)}
                placeholder='Enviar'
                type='tel'
                value={valueToCalc}
              />
            </div>
          </div>
          <div className='field'>
            <label htmlFor='comision'>Comisión</label>
            <div className='control'>
              <span>{ifInitial ? 0 : totalAverage}</span>
            </div>
          </div>

          <div className='field'>
            <label htmlFor='received'>Recibes</label>
            <CopyToClipboard text={receive.toString()} onCopy={onCopy}>
              <div
                className='control'
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                }}>
                <span>{ifInitial ? 0 : receive}</span>
                <span
                  className='icon is-small is-left'
                  style={{
                    top: '20%',
                    right: '10%',
                    position: 'absolute',
                  }}>
                  <AiFillCopy />
                </span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className='is-flex is-justify-content-center'>
          <button className='button is-link' onClick={resetForm}>
            Resetear formulario
          </button>
        </div>
      </article>
    </>
  );
};
