import { useConfigComission } from 'hooks';
import React, { useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
export const ComissionCard = () => {
  const {
    config: { averagePaypalCommission, paypalCommission },
    setFirstComission,
    setSecondComission,
    resetComssions,
  } = useConfigComission();

  const [isEdit, setEdit] = useState(false);
  const [form, setForm] = useState({
    firstComission: averagePaypalCommission.toString().replace('.', ','),
    secondComission: paypalCommission.toString().replace('.', ','),
  });

  const reset = () => {
    resetComssions();
    setForm({
      firstComission: averagePaypalCommission.toString().replace('.', ','),
      secondComission: paypalCommission.toString().replace('.', ','),
    });
  };

  const absolutePosition: React.CSSProperties = {
    position: 'absolute',
  };

  return (
    <div className='card'>
      <div className='card-content'>
        <h3 className='title has-text-centered has-text-left-mobile is-size-5-mobile'>
          Comisiones de paypal paypal
        </h3>

        <div className='columns'>
          <div className='column'>
            <div
              style={{
                position: 'relative',
              }}>
              <input
                type='text'
                className='input'
                name='firstComission'
                onChange={({ target: { value } }) => {
                  setFirstComission(Number(value.replace(',', '.')));
                  setForm({ ...form, firstComission: value });
                }}
                value={form.firstComission}
                disabled={!isEdit}
              />
              <span
                style={{
                  right: '30%',
                  top: '10px',
                  ...absolutePosition,
                }}>
                %
              </span>
              <button
                style={{
                  right: '0%',
                  ...absolutePosition,
                }}
                onClick={reset}
                className='button'>
                <AiOutlineReload />
              </button>
            </div>
          </div>
          <div className='ml-3 is-flex is-align-items-center'>
            <span>más</span>
          </div>
          <div className='column'>
            <div
              style={{
                position: 'relative',
              }}>
              <input
                type='text'
                className='input'
                onChange={({ target: { value } }) => {
                  setSecondComission(Number(value.replace(',', '.')));
                  setForm({
                    ...form,
                    secondComission: value,
                  });
                }}
                value={form.secondComission}
                disabled={!isEdit}
              />
              <span
                style={{
                  right: '10%',
                  top: '10px',
                  ...absolutePosition,
                }}
                className='mx-2'>
                USDs
              </span>
            </div>
          </div>
        </div>
        <div className='control is-flex is-align-items-center'>
          <button
            className={`button ${isEdit ? 'is-link' : ''}`}
            onClick={() => setEdit(!isEdit)}>
            {isEdit ? 'Guardar' : 'Editar'}
          </button>
        </div>
      </div>
    </div>
  );
};
