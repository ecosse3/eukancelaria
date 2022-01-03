import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import Head from 'next/head';
import backgroundImage from '../../public/assets/images/404.png';
import Button from '../components/Button';
import LogoSlogan from '../../public/assets/images/logo-slogan.png';

const NotFound: NextPage = () => (
  <Fragment>
    <Head>
      <title>404 - Ewa Urbanowicz - Kancelaria Radcy Prawnego</title>
      <meta
        property="og:title"
        content="404 - Ewa Urbanowicz - Kancelaria Radcy Prawnego"
        key="title"
      />
    </Head>
    <main>
      <div className="relative max-w-7xl mx-auto min-h-screen">
        <div className="grid mx-5 grid-cols-1 md:grid-cols-2 place-items-center min-h-screen">
          <div className="flex flex-col place-items-center gap-10 mt-5 md:mt-0">
            <Image src={LogoSlogan} alt="Logo" width={128} height={73.6} />
            <h1 className="text-3xl text-primary tracking-wide font-light">
              Nie ma takiej strony!
            </h1>
            <Link href="/">
              <a>
                <Button background="secondary" size="big">
                  Wróć do strony głównej
                </Button>
              </a>
            </Link>
          </div>
          <div className="flex place-items-center h-full">
            <Image
              alt="404"
              src={backgroundImage}
              className="img-fluid mx-auto my-auto d-block"
            />
          </div>
        </div>
      </div>
    </main>
  </Fragment>
);

export default NotFound;
