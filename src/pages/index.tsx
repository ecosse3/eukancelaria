import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ewa Urbanowicz - Kancelaria Radcy Prawnego</title>
        <meta
          property="og:title"
          content="Ewa Urbanowicz - Kancelaria Radcy Prawnego"
          key="title"
        />
      </Head>
      <Header />
      <main>
        <div className="relative w-full h-screen bg-no-repeat bg-cover bg-[position:80%] bg-[url('../assets/images/bg_mobile.jpg')] md:bg-[url('../assets/images/bg.jpg')]">
          <div className="flex max-w-7xl mx-auto w-full h-full place-items-center">
            <div className="font-montserrat animate mx-3 max-w-[10rem] lg:max-w-lg">
              <h1 className="leading-8 italic text-2xl lg:text-3xl">
                Scire leges non hoc est verba earum tenere, sed vim ac potestatem
              </h1>
              <h2 className="font-light leading-7 text-lg lg:text-xl">
                - Znajomość praw polega nie na pamiętaniu ich dosłownie, ale na
                umiejętności stosowania ich sensu
              </h2>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
