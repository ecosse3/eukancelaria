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
        <title>Zespół - Ewa Urbanowicz - Kancelaria Radcy Prawnego - eukancelaria</title>
        <meta
          property="og:title"
          content="Zespół - Ewa Urbanowicz - Kancelaria Radcy Prawnego"
          key="title"
        />
        <meta
          name="description"
          content="Ewa Urbanowicz to absolwentka Wydziału Prawa i Administracji Uniwersytetu Marii-Curie Skłodowskiej w Lublinie. Ukończyła aplikację radcowską w Okręgowej Izbie Radców Prawnych w Lublinie."
          key="description"
        />
        <meta
          property="og:description"
          content="Ewa Urbanowicz to absolwentka Wydziału Prawa i Administracji Uniwersytetu Marii-Curie Skłodowskiej w Lublinie. Ukończyła aplikację radcowską w Okręgowej Izbie Radców Prawnych w Lublinie."
          key="og-description"
        />
      </Head>
      <Header accent="white" />
      <main className="overflow-hidden">
        {/* Hero */}
        <div
          className="relative w-full min-h-full h-[85vh] md:h-screen
          bg-gradient-to-br from-[#AF65D7] to-[#2C2947] rounded-b-[5rem] 
          md:-rotate-[18deg] md:-mt-72 md:mb-60
          xl:-rotate-[18deg] xl:-mt-[34rem]
          after:absolute after:block after:content=[''] after:z-20 after:bg-[url(/assets/team/1.5x/Zasob1@1.5x.png)] after:bg-no-repeat
          after:left-0 after:right-0 after:top-60 after:scale-75 after:w-full after:h-full after:bg-contain after:mx-auto md:after:mx-0 md:after:right-auto
          md:after:left-[0%] md:after:top-[45%] md:after:scale-[.6] md:after:rotate-[18deg]
          lg:after:left-[5%] lg:after:top-[40%] lg:after:scale-[.6] lg:after:rotate-[18deg]
          xl:after:left-[20%] xl:after:top-[60%] xl:after:scale-50 xl:after:rotate-[18deg]
          2xl:after:left-[20%] 2xl:after:top-[40rem] 2xl:after:scale-50 2xl:after:rotate-[18deg]"
        >
          <div className="flex flex-col max-w-7xl mx-auto w-full h-full rotate-0 text-center md:text-left md:rotate-[18deg] md:pt-72 xl:pt-[34rem]">
            <h1 className="text-white text-5xl md:text-6xl mt-[20vh] md:mt-[25vh] mx-4">
              Zespół
            </h1>
          </div>
        </div>
        {/* Ewa */}
        <section className="flex flex-col max-w-3xl mx-auto pb-8 pt-28 items-center">
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
            Odbyła szereg kursów i szkoleń, w szczególności z zakresu ochrony danych
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
        {/* Tomasz */}
        <section className="flex flex-col max-w-3xl mx-auto pb-16 pt-16 items-center">
          <h2 className="text-slate-600 text-2xl font-light font-roboto">Radca Prawny</h2>
          <h1 className="text-slate-600 text-3xl font-bold mt-1">Tomasz Jakubiak</h1>
          <hr className="h-0.5 w-14 my-8 bg-black" />
          <p className="text-xl text-slate-500 mx-4 md:mx-0 text-justify max-w-3xl">
            Absolwent Wydziału Prawa i Administracji Uniwersytetu Marii-Curie Skłodowskiej
            w Lublinie. Szkolił się w Krajowej Szkole Sądownictwa i Prokuratury.
          </p>

          <p className="text-xl text-slate-500 mx-4 md:mx-0 text-justify max-w-3xl mt-4">
            Specjalista w zakresie prawa cywilnego, prawa rodzinnego i opiekuńczego, prawa
            pracy oraz postępowań dyscyplinarnych.
          </p>

          <p className="text-xl text-slate-500 mx-4 md:mx-0 text-justify max-w-3xl mt-4">
            Na co dzień w Kancelarii odpowiedzialny jest za reprezentowanie Klientów przed
            sądami powszechnymi, obsługę prawną podmiotów gospodarczych i jednostek
            sektora publicznego, a także za reprezentowanie obwinionych czy pokrzywdzonych
            przed organami dyscyplinarnymi samorządów zawodowych, na każdym etapie
            postępowania.
          </p>

          <p className="text-xl text-slate-500 mx-4 md:mx-0 self-start max-w-3xl mt-4">
            Prywatnie jego pasją jest motoryzacja oraz sporty siłowe.
          </p>
        </section>
      </main>
      <Footer withMap />
    </Fragment>
  );
};

export default About;
