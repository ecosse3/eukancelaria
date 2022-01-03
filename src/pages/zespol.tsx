import { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Component
const About: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Ewa Urbanowicz - Kancelaria Radcy Prawnego</title>
        <meta
          property="og:title"
          content="Ewa Urbanowicz - Kancelaria Radcy Prawnego"
          key="title"
        />
      </Head>
      <Header accent="white" />
      <main className="overflow-hidden">
        <div
          className="relative w-full min-h-full h-[85vh] md:h-screen
          bg-gradient-to-br from-[#AF65D7] to-[#2C2947] rounded-b-[5rem] 
          md:-rotate-[18deg] md:-mt-72 md:mb-60
          xl:-rotate-[18deg] xl:-mt-[34rem]
          after:absolute after:block after:content=[''] after:z-20 after:bg-[url(/assets/team/1.5x/Zasob1@1.5x.png)] after:bg-no-repeat
          after:left-0 after:right-0 after:top-60 after:scale-75 after:w-full after:h-full after:bg-contain after:max-w-[430px] 
          after:mx-auto md:after:mx-0 md:after:right-auto
          md:after:left-[0%] md:after:top-[70%] md:after:max-w-[600px] md:after:rotate-[18deg]
          lg:after:left-[45%] lg:after:top-[70%] lg:after:scale-100 lg:after:rotate-[18deg]"
        >
          <div className="flex flex-col max-w-7xl mx-4 lg:mx-auto w-full h-full rotate-0 text-center md:text-left md:rotate-[18deg] md:pt-72 xl:pt-[34rem]">
            <h1 className="text-white text-5xl md:text-6xl mt-[20vh] md:mt-[25vh] mx-4">
              Zespół
            </h1>
          </div>
        </div>
        <section className="flex flex-col max-w-7xl mx-auto pb-16 pt-28 items-center">
          <h2 className="text-slate-600 text-2xl font-light font-roboto">Radca Prawny</h2>
          <h1 className="text-slate-600 text-3xl font-bold mt-1">Ewa Urbanowicz</h1>
          <hr className="h-0.5 w-14 my-8 bg-black" />
          <p className="text-xl text-slate-500 mx-4 md:mx-0 text-justify max-w-3xl">
            Absolwentka Wydziału Prawa i Administracji Uniwersytetu Marii-Curie
            Skłodowskiej w Lublinie. Ukończyła aplikację radcowską w Okręgowej Izbie
            Radców Prawnych w Lublinie.
          </p>

          <p className="text-xl text-slate-500 mx-4 md:mx-0 text-justify max-w-3xl mt-4">
            Specjalistka w zakresie ochrony danych osobowych, prawa handlowego, rodzinnego
            oraz prawa i postępowania cywilnego. Na co dzień zajmuje się prowadzeniem
            postępowań sądowych przed sądami cywilnymi, gospodarczymi i rodzinnymi oraz
            obsługą prawną podmiotów gospodarczych i jednostek sektora publicznego.
          </p>

          <p className="text-xl text-slate-500 mx-4 md:mx-0 text-justify max-w-3xl mt-4">
            Odbyła szereg kursów i szkoleń w szczególności z zakresu ochrony danych
            osobowych. Posiada certyfikat European Network Security Institute w zakresie
            przepisów o ochronie danych osobowych. Członek rzeczywisty Stowarzyszenia
            Inspektorów Danych Osobowych.
          </p>

          <p className="text-xl text-slate-500 mx-4 md:mx-0 text-justify max-w-3xl mt-4">
            Posiada doświadczenie dydaktyczne jako wykładowca na aplikacji radcowskiej
            prowadzonej przy Okręgowej Izbie Radców Prawnych w Lublinie. Prywatnie
            pasjonuje się tańcem i jazdą na motocyklu, a w domu ma dwa koty{' '}
            <FontAwesomeIcon icon={['far', 'smile']} aria-hidden="true" />
          </p>
        </section>
      </main>
      <Footer withMap />
    </Fragment>
  );
};

export default About;
