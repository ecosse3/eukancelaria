import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header, { services } from '../components/Header';
import Logo from '../assets/images/logo.png';
import Button from '../components/Button';
import ServiceCard, { TSize } from '../components/ServiceCard';

// Component
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
        <section
          id="hero"
          className="relative w-full h-screen bg-no-repeat bg-cover bg-[position:80%] bg-[url('../assets/images/bg_mobile.jpg')] md:bg-[url('../assets/images/bg.jpg')]"
        >
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
        </section>
        {/* About */}
        <section
          id="about"
          className="flex flex-col max-w-7xl mx-auto py-16 items-center"
        >
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
          <Button background="secondary">Dowiedz się więcej</Button>
        </section>
        {/* Services */}
        <section
          id="services"
          className="flex flex-col max-w-7xl mx-auto py-16 items-center"
        >
          <h2 className="text-slate-600 text-3xl font-bold">Zakres usług</h2>
          <hr className="h-0.5 w-14 my-8 bg-black" />
          <div className="flex justify-center gap-10 flex-wrap">
            {services.map((service) => (
              <ServiceCard
                key={service.name}
                title={service.name}
                url={service.href}
                image={service.image}
                size={service.cardSize as TSize}
              />
            ))}
          </div>
        </section>
        {/* Map */}
        <section id="map" className="relative text-right max-h-[535px] h-full w-full">
          <div className="relative overflow-hidden bg-transparent pointer-events-none">
            <iframe
              className="w-[110%] -mt-14 -ml-[46px]"
              width="100%"
              height="535"
              id="gmap_canvas"
              src="https://www.google.com/maps/d/u/0/embed?mid=1iL9CSbyniVGmFayaPAof7i5jd_MBv-2-&usp=sharing&output=embed&iwloc=near"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            ></iframe>
          </div>
        </section>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Home;
