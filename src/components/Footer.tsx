import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/solid';
import services from '../data/services';
import links from '../data/links';
import Button from './Button';

interface IProps {
  withMap?: boolean;
}

const Footer = ({ withMap }: IProps) => (
  <>
    {withMap ? (
      <section id="map" className="relative text-right max-h-[535px] h-full w-full">
        <div className="relative overflow-hidden bg-transparent pointer-events-none">
          <iframe
            loading="lazy"
            className="w-[110%] -mt-14 -ml-[46px]"
            width="100%"
            height="535"
            id="gmap_canvas"
            aria-label="Map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1iL9CSbyniVGmFayaPAof7i5jd_MBv-2-&output=embed&iwloc=near"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          ></iframe>
        </div>
      </section>
    ) : null}
    <footer className="text-center lg:text-left bg-primary text-white">
      <div className="border-b border-white border-opacity-5">
        <div className="flex max-w-7xl mx-auto justify-center items-center lg:justify-between py-6">
          <div className="mr-12 hidden lg:block">
            <span className="flex items-center">
              Bądź z nami w kontakcie! Odwiedź nasze media społecznościowe{' '}
              <ArrowRightIcon className="ml-1 h-3 w-3" />
            </span>
          </div>
          <div className="flex justify-center gap-6">
            {links.facebook ? (
              <Link href={links.facebook}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-facebook"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    className="w-2.5"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>
              </Link>
            ) : null}
            {links.twitter ? (
              <Link href={links.twitter}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-twitter"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    className="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </a>
              </Link>
            ) : null}
            {links.linkedin ? (
              <Link href={links.linkedin}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-linkedin"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    className="w-3.5"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </a>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="max-w-lg">
            <span className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
              O Kancelarii
            </span>
            <p className="max-w-sm mx-auto md:max-w-none">
              Kancelaria oferuje kompleksową obsługę prawną przedsiębiorców, jak i
              świadczy usługi prawne dla osób fizycznych.
            </p>
            <p className="mt-4">
              Wykonanie:{' '}
              <Link href="https://www.linkedin.com/in/lukasz-kurpiewski/">
                <a className="hover:text-secondary-400">Łukasz Kurpiewski</a>
              </Link>
            </p>
          </div>
          <div tw="flex flex-col justify-center mx-auto md:ml-auto">
            <span tw="uppercase font-semibold mb-4">Zakres usług</span>
            <div tw="grid grid-cols-2 px-6 md:(block px-0)">
              {services.map((service) => (
                <p key={service.name} className="mt-4 md:first:mt-0 md:mt-4">
                  <Link href={service.href} passHref>
                    <a tw="flex text-left mr-4 md:mr-0 text-white hover:text-secondary-400">
                      <service.icon
                        className="flex-shrink-0 h-6 w-6 text-secondary-400"
                        aria-hidden="true"
                      />
                      <span className="mt-0.5 ml-4 text-sm md:text-base">
                        {service.name}
                      </span>
                    </a>
                  </Link>
                </p>
              ))}
            </div>
          </div>
          {/* <div className="flex flex-col items-center md:items-start"> */}
          {/*   <span className="text-base uppercase font-semibold mb-4">Newsletter</span> */}
          {/*   <span className="text-sm">Już wkrótce!</span> */}
          {/* <input */}
          {/*   type="text" */}
          {/*   name="name" */}
          {/*   placeholder="Imię" */}
          {/*   className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 */}
          {/* bg-white bg-clip-padding border border-solid border-gray-300 rounded transition */}
          {/* ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:ring-2 focus:ring-secondary-400 focus:outline-none" */}
          {/* /> */}
          {/* <input */}
          {/*   type="text" */}
          {/*   name="email" */}
          {/*   placeholder="twoj@email.com" */}
          {/*   className="form-control block mt-4 px-3 py-1.5 text-base font-normal text-gray-700 */}
          {/* bg-white bg-clip-padding border border-solid border-gray-300 rounded transition */}
          {/* ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:ring-2 focus:ring-secondary-400 focus:outline-none" */}
          {/* /> */}
          {/* <Button className="mt-4" background="secondary"> */}
          {/*   Zapisz się */}
          {/* </Button> */}
          {/* </div> */}
        </div>
      </div>
      {/* Panel */}
      <div className="p-6 bg-primary border-t border-white border-opacity-5">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-between">
          {/* Left Panel */}
          <div className="order-2 md:order-1 mt-4 md:mt-0">
            <span>© {new Date().getFullYear()} Wszelkie prawa zastrzeżone: </span>
            <span className="text-white font-semibold">Ewa Urbanowicz</span>
          </div>
          {/* Right Panel */}
          {/* <div tw="flex flex-col gap-2 order-1 md:order-2 md:gap-6 md:flex-row"> */}
          {/*   <Link href="/polityka-prywatnosci"> */}
          {/*     <a className="hover:text-secondary-400">Polityka prywatności</a> */}
          {/*   </Link> */}
          {/*   <Link href="/regulamin"> */}
          {/*     <a className="hover:text-secondary-400">Regulamin</a> */}
          {/*   </Link> */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
