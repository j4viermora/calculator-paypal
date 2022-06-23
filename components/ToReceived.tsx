import React, { useEffect, useState } from 'react';
import { useCalComission } from 'hooks';
import { toast } from 'react-hot-toast';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiFillCopy } from 'react-icons/ai';
export const ToReceived = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState({
    totalAverage: '',
    totalToSend: '',
  });
  const { calcToReceive } = useCalComission();
  const { totalAverage, totalToSend } = result;
  const ifInitial = value === '';

  useEffect(() => {
    const { totalToSend, totalAverage } = calcToReceive(
      Number(value.replace(',', '.'))
    );

    setResult((prev) => ({
      ...prev,
      totalAverage,
      totalToSend,
    }));
  }, [value]);

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(target.value);
  };

  const resetForm = () => {
    setValue('');
    setResult({
      totalAverage: '',
      totalToSend: '',
    });
  };

  const onCopy = () => {
    toast.success('Copiado al portapapeles');
  };

  return (
    <>
      <article className='card pb-5'>
        <div className='card-content'>
          <h3 className='title is-size-5-mobile'>
            Calculadora paypal para recibir pagos
          </h3>
          <div className='field'>
            <label htmlFor='toReceive'>Para recibir</label>
            <div className='control'>
              <input
                className='input'
                name='toReceive'
                onChange={handleChange}
                placeholder='Para recibir'
                type='number'
                value={value}
              />
            </div>
          </div>

          <div className='field'>
            <label htmlFor='comission'>Comisión</label>
            <div className='control'>
              <span id='comission'>{ifInitial ? 0 : totalAverage}</span>
            </div>
          </div>

          <div className='field'>
            <label htmlFor='amounToSend'>Deben enviarme</label>
            <CopyToClipboard text={totalToSend.toString()} onCopy={onCopy}>
              <div
                className='control'
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                }}>
                <span id='amounToSend'>{ifInitial ? 0 : totalToSend}</span>
                <span
                  className='icon is-medium is-left'
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
