import { Fragment } from 'react';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import pl from 'date-fns/locale/pl';
import format from 'date-fns/format';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../../public/assets/images/logo.png';
import Button from '../components/Button';
import ServiceCard, { TSize } from '../components/ServiceCard';
import PostCard from '../components/PostCard';
import services from '../data/services';
import { GRAPH_URL } from '../api/consts';
import links from '../data/links';
import { IPost } from '../types/post';

type ImageType = {
  id: string;
  picture: string;
};

interface IProps {
  recentPosts: IPost[];
  images: ImageType[];
}

const capitalizeFirstLetter = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

// Component
const Home = ({ recentPosts, images }: IProps) => {
  return (
    <Fragment>
      <Head>
        <title>Ewa Urbanowicz - Kancelaria Radcy Prawnego</title>
        <meta
          property="og:title"
          content="Ewa Urbanowicz - Kancelaria Radcy Prawnego"
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
            {recentPosts?.slice(0, 3).map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={capitalizeFirstLetter(post.message.split('\n\n')[0])}
                description={post.message.split('\n\n')[1]}
                url={`${links.facebook}/posts/${post.id.split('_')[1]}`}
                image={images.find((image: ImageType) => image.id === post.id)?.picture}
                date={format(
                  new Date(post.created_time),
                  "dd MMMM yyyy 'o godz.' HH:MM",
                  {
                    locale: pl
                  }
                )}
              />
            ))}
          </div>
        </section>
        <Footer withMap />
      </main>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = await axios
    .get(
      `${GRAPH_URL}${process.env.PAGE_ID}/feed?limit=6&access_token=${process.env.ACCESS_TOKEN}`
    )
    .then((res) => res.data)
    .catch((err) => console.log('GET recentPosts', err));

  const ids =
    (await recentPosts?.data
      ?.filter((post: IPost) => post.message)
      .map((post: IPost) => post.id)) || [];

  const images: ImageType[] = [];

  await Promise.all(
    ids.map(async (id: string) => {
      const image = await axios
        .get(`${GRAPH_URL}${id}?fields=picture&access_token=${process.env.ACCESS_TOKEN}`)
        .then((res) => res.data)
        .catch((err) => console.log('GET post picture', err));

      images.push({ id, picture: image.picture });
    })
  );

  return {
    props: {
      recentPosts: recentPosts?.data?.filter((post: IPost) => post.message) || null,
      images
    }
  };
};

export default Home;
