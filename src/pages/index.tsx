import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../../public/assets/images/logo.png';
import Button from '../components/Button';
import ServiceCard, { TSize } from '../components/ServiceCard';
import PostCard from '../components/PostCard';
import services from '../data/services';

const recentPosts = [
  {
    id: 1,
    title: 'Odmowa udzielenia urlopu okolicznościowego',
    description:
      'Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    url: 'https://facebook.com/EwaUrbanowicz/post/1',
    date: 2
  },
  {
    id: 2,
    title: 'Czy żołnierz ma prawo do bycia offline?',
    description:
      'Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.',
    url: 'https://facebook.com/EwaUrbanowicz/post/2',
    date: 5
  },
  {
    id: 3,
    title: 'Upadłość konsumencka - czym tak naprawdę jest',
    description:
      'Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    url: 'https://facebook.com/EwaUrbanowicz/post/2',
    date: 6
  }
];

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
          className="relative w-full h-screen bg-[#FBF9FE] bg-no-repeat bg-cover bg-[position:80%] bg-[url('/assets/images/bg_mobile.jpg')]
          md:bg-[url('/assets/images/bg.jpg')] md:bg-cover xl:bg-[position:60%] xl:bg-contain"
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
          <Link href="/o-nas">
            <a>
              <Button background="secondary">Dowiedz się więcej</Button>
            </a>
          </Link>
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
        <section
          id="recentPosts"
          className="flex flex-col max-w-7xl mx-auto py-16 items-center"
        >
          <h2 className="text-slate-600 text-3xl font-bold">Ostatnie wpisy</h2>
          <hr className="h-0.5 w-14 my-8 bg-black" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 lg:mx-0 gap-5 md:gap-10 lg:gap-14">
            {recentPosts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                url={post.url}
                date={post.date}
              />
            ))}
          </div>
        </section>
        <Footer withMap />
      </main>
    </React.Fragment>
  );
};

export default Home;
