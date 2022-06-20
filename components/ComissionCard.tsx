import React from 'react';

export const ComissionCard = () => {
  return (
    <div className='card'>
      <div className='card-content'>
        <h3 className='title has-text-centered has-text-left-mobile is-size-5-mobile'>
          Comisiones de paypal paypal
        </h3>
        <div className='is-flex is-align-items-center is-justify-content-center'>
          <div>
            <input type='text' className='input' value={'5,4'} disabled />
          </div>
          <span className='mx-2'>% más</span>
          <div>
            <input type='text' className='input ' value={'0,3'} disabled />{' '}
          </div>
          <span className='mx-2'>USDs</span>
        </div>
      </div>
    </div>
  );
};
