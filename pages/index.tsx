import type { NextPage } from 'next';
import Head from 'next/head';

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
