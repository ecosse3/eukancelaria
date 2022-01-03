import { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next/types';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

// Component
const About: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>O nas - Ewa Urbanowicz - Kancelaria Radcy Prawnego</title>
        <meta
          property="og:title"
          content="O nas - Ewa Urbanowicz - Kancelaria Radcy Prawnego"
          key="title"
        />
        <meta
          name="description"
          content="Kancelaria Ewy Urbanowicz oferuje kompleksową obsługę prawną przedsiębiorców, jak i świadczy usługi prawne dla osób fizycznych."
          key="description"
        />
        <meta
          property="og:description"
          content="Kancelaria Ewy Urbanowicz oferuje kompleksową obsługę prawną przedsiębiorców, jak i świadczy usługi prawne dla osób fizycznych."
          key="og-description"
        />
      </Head>
      <Header accent="white" />
      <main className="overflow-hidden">
        <div
          className="relative w-full min-h-full h-[85vh] md:h-screen
          bg-gradient-to-br from-[#AF65D7] to-[#2C2947] rounded-b-[5rem] 
          md:-rotate-[18deg] md:-mt-72 md:mb-60
          xl:-rotate-[18deg] xl:-mt-[34rem]
          after:absolute after:block after:content=[''] after:z-20 after:bg-[url(/assets/about/1x/Zasob3.png)] after:bg-no-repeat
          after:left-0 after:right-0 after:top-60 after:scale-75 after:w-full after:h-full after:bg-contain after:max-w-[440px] after:mx-auto 
          md:after:mx-0 md:after:right-auto md:after:left-[0%] md:after:top-[60%] md:after:max-w-[750px] md:after:rotate-[18deg]
          lg:after:left-[45%] lg:after:top-[60%] lg:after:scale-100 lg:after:rotate-[18deg]"
        >
          <div className="flex flex-col max-w-7xl mx-4 lg:mx-auto w-full h-full rotate-0 text-center md:text-left md:rotate-[18deg] md:pt-72 xl:pt-[34rem]">
            <h1 className="text-white text-5xl md:text-6xl mt-[20vh] md:mt-[25vh] mx-4">
              O Kancalarii
            </h1>
            <Link href="/zespol">
              <a>
                <Button className="mt-8 mx-4" background="secondary" size="big">
                  Poznaj nasz zespół
                </Button>
              </a>
            </Link>
          </div>
        </div>
        <section className="flex flex-col max-w-7xl mx-auto pb-16 pt-28 items-center">
          <h2 className="text-slate-600 text-3xl font-bold">O Kancelarii</h2>
          <hr className="h-0.5 w-14 my-8 bg-black" />
          <p className="text-xl text-slate-500 mx-4 text-justify max-w-3xl">
            Kancelaria oferuje kompleksową obsługę prawną przedsiębiorców, jak i świadczy
            usługi prawne dla osób fizycznych. Poza nieustannym dążeniem do doskonałości
            zawodowej, przy jednoczesnym poszanowaniu zasad etyki, pamiętamy, że każdy
            Klient i każda sprawa wymaga szczególnego, zindywidualizowanego podejścia.
          </p>
          <p className="text-xl text-slate-500 mx-4 mt-8 text-justify max-w-3xl">
            Działamy przede wszystkim na terenie województw lubelskiego i mazowieckiego.
            Dzięki wykorzystaniu nowoczesnych technologii komunikacyjnych, Kancelaria
            świadczy także obsługę prawną na odległość. Współpracujemy w ten sposób z
            Klientami krajowymi, jak i zagranicznymi.
          </p>
        </section>
      </main>
      <Footer withMap />
    </Fragment>
  );
};

export default About;
