import type { NextPage } from 'next';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import {
  Layout,
  ToReceived,
  ToSend,
  InfoSection,
  Footer,
  ComissionCard,
} from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Toaster />
      <Head>
        <title>Calculadora paypal</title>
        <meta
          name='description'
          content='Calcula tus comisiones de paypal de manera sencilla'
        />
        <meta
          name='keywords'
          content='paypal, comisiones, calculadora, calculadora paypal, paypal venezuela'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <section className='section'>
          <h2 className='title is-1 has-text-centered is-size-3-mobile has-text-left-mobile'>
            Calculadora de comisiones paypal
          </h2>
          <div className='is-flex is-align-items-center'>
            <figure>
              <img
                src='./paypal.svg'
                alt='logo-paypal'
                style={{
                  width: '50px',
                }}
              />
            </figure>
            <span className='ml-2'>
              {' '}
              <a
                href='https://www.paypal.com/paypalme/j4viermora'
                target='_blank'
                rel='noreferrer'>
                ¿Quieres hacer un donativo? pincha aquí
              </a>
            </span>
          </div>
        </section>

        <section className='section'>
          <div className='columns'>
            <div className='column'>
              <ToSend />
            </div>
            <div className='column'>
              <ToReceived />
            </div>
          </div>
        </section>
        <section className='section'>
          <ComissionCard />
        </section>
        <section className='section'>
          <InfoSection />
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
