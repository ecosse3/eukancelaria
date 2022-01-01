import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { servicesWithoutIcon } from '../../data/services';
import { IService } from '../../types/service';

interface IProps {
  service: IService;
}

const Service = ({ service }: IProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Ewa Urbanowicz - Kancelaria Radcy Prawnego</title>
        <meta
          property="og:title"
          content={`Ewa Urbanowicz - Kancelaria Radcy Prawnego - ${service.name}`}
          key="title"
        />
      </Head>
      <Header />
      <main>
        <div>
          Page: {service.name} - {service.id}
        </div>
      </main>
      <Footer />
    </React.Fragment>
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
