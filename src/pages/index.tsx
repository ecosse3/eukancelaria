import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../assets/images/logo.png';

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
        {/* Hero */}
        <div className="relative w-full h-screen bg-no-repeat bg-cover bg-[position:80%] bg-[url('../assets/images/bg_mobile.jpg')] md:bg-[url('../assets/images/bg.jpg')]">
          <div className="flex max-w-7xl mx-auto w-full h-full place-items-center">
            <div className="animate mx-4 max-w-[10rem] lg:max-w-lg">
              <h1 className="font-montserrat text-primary leading-7 font-semibold italic text-2xl lg:leading-10 lg:text-3xl">
                Scire leges non hoc est verba earum tenere, sed vim ac potestatem
              </h1>
              <h2 className="font-roboto text-slate-600 mt-2 font-light leading-6 text-lg lg:leading-7 lg:text-xl">
                - Znajomość praw polega nie na pamiętaniu ich dosłownie, ale na
                umiejętności stosowania ich sensu
              </h2>
            </div>
          </div>
        </div>
        {/* About */}
        <div className="flex flex-col max-w-7xl mx-auto py-16 items-center">
          <Image
            src={Logo}
            alt="Ewa Urbanowicz - Kancelaria Radcy Prawnego"
            width={250}
            height={104}
          />
          <span className="text-md text-slate-500 mx-4 my-16 text-center max-w-3xl">
            Kancelaria oferuje kompleksową obsługę prawną przedsiębiorców, jak i świadczy
            usługi prawne dla osób fizycznych. Poza nieustannym dążeniem do doskonałości
            zawodowej, przy jednoczesnym poszanowaniu zasad etyki, pamiętamy, że każdy
            Klient i każda sprawa wymaga szczególnego, zindywidualizowanego podejścia.
          </span>
          <button className="btn">Dowiedz się więcej</button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
