import React from 'react';

export const InfoSection = () => {
  return (
    <div className='content'>
      <h2>Como usar la calculadora de comisiones paypal</h2>
      <p>
        Dependiente si lo que se desea es enviar dinero paypal o recibir dinero
        paypal, debe escoger el formulario de la derecha o izquierda
      </p>
      <p>
        Vienen Por defecto los valores estándar de las comisiones de PayPal que
        son 5,4% + un fijo de 0,30 USD por transacción. Debes tener en cuenta si
        tu país tiene una comisión diferente y colócala de forma manual en la
        parte de “Las Comisiones PayPal“.
      </p>
      <h3>Calculadora paypal para recibir pagos</h3>
      <p>
        Si vamos a combrar un servicio con paypal, debemos tener en cuenta que
        la comisión de envio del dinero lo cubre la persona que esta realizando
        el pago por lo que debemos recordar la comision que deber ser agregada
        por ella para que nos llegue a nuestra cuenta paypal el dinero
        correspondiente al servicio que prestamos y queremos cobrar por paypal.
      </p>
      <h3>Calculadora paypal para enviar</h3>
      <p>
        Si vamos a enviar dinero a una persona, debemos tener en cuenta que la
        comision la asumiremos nosotros para esos casos es podemos utilizar la
        calculadora de envio
      </p>
    </div>
  );
};
