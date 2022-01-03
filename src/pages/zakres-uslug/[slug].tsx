import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ServiceHero from '../../components/ServiceHero';
import { servicesWithoutIcon } from '../../data/services';
import { IService } from '../../types/service';

interface IProps {
  service: IService;
}

const Service = ({ service }: IProps) => {
  return (
    <Fragment>
      <Head>
        <title>Ewa Urbanowicz - Kancelaria Radcy Prawnego - {service.name}</title>
        <meta
          property="og:title"
          content={`Ewa Urbanowicz - Kancelaria Radcy Prawnego - ${service.name}`}
          key="title"
        />
        <meta name="description" content={service.description || ''} key="description" />
        <meta
          property="og:description"
          content={service.description || ''}
          key="og-description"
        />
      </Head>
      <Header />
      <main className="mb-16">
        <ServiceHero
          color={service.textColor}
          background={service.backgroundColor}
          image={service.imagePath}
          title={service.name}
        />
        {service.content ? (
          <div className="relative max-w-3xl text-justify mx-4 md:mx-auto">
            <div dangerouslySetInnerHTML={{ __html: service.content }} />
          </div>
        ) : null}
        {service.items && service.items.length > 0 ? (
          <div className="relative max-w-7xl mx-auto text-center">
            <h2 className="text-3xl text-gray-800">W zakres naszych usług wchodzi:</h2>
            <ul className="max-w-2xl text-gray-500 inline-block list-disc text-left pl-4 list-outside mt-8 mx-6">
              {service.items?.map((c) => (
                <li key={c} className="text-lg mt-2">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="relative max-w-7xl mx-auto text-center mt-8">
          <Link href="/#services">
            <a>
              <Button background="secondary">Zobacz inne usługi</Button>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = servicesWithoutIcon.map((service) => {
    const slug = service.slug;

    return {
      params: { slug }
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service: Omit<IService, 'icon'> | undefined = servicesWithoutIcon.find(
    (page) => page.slug === params?.slug
  );

  return {
    props: {
      service
    }
  };
};

export default Service;
