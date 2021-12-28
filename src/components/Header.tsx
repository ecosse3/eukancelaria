import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  AcademicCapIcon,
  ArrowCircleDownIcon,
  BookOpenIcon,
  BriefcaseIcon,
  HeartIcon,
  IdentificationIcon,
  InformationCircleIcon,
  MenuIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  UserGroupIcon,
  UsersIcon,
  XIcon
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Logo from '../assets/images/logo.png';
import LogoMobile from '../assets/images/logo-slogan.png';

const about = [
  {
    name: 'O nas',
    description: 'Dowiedz się więcej o kancelarii',
    href: '#',
    icon: InformationCircleIcon
  },
  {
    name: 'Nasz zespół',
    description: 'Poznaj nasz zespół',
    href: '#',
    icon: UsersIcon
  }
];

const callsToAction = [
  {
    name: 'Facebook',
    href: '#',
    icon: FontAwesomeIcon,
    iconName: ['fab', 'facebook'],
    color: 'text-blue-600'
  }
];

const services = [
  {
    name: 'Prawo cywilne',
    href: '#',
    icon: BookOpenIcon
  },
  {
    name: 'Prawo rodzinne i opiekuńcze',
    href: '#',
    icon: UserGroupIcon
  },
  {
    name: 'Prawo pracy',
    href: '#',
    icon: BriefcaseIcon
  },
  {
    name: 'Prawo medyczne',
    href: '#',
    icon: HeartIcon
  },
  {
    name: 'Prawo gospodarcze i spółek',
    href: '#',
    icon: OfficeBuildingIcon
  },
  {
    name: 'Prawo upadłościowe',
    href: '#',
    icon: ArrowCircleDownIcon
  },
  {
    name: 'Odpowiedzialność dyscyplinarna',
    href: '#',
    icon: IdentificationIcon
  },
  {
    name: 'Ochrona danych osobowych',
    href: '#',
    icon: AcademicCapIcon
  }
];

const recentPosts = [
  { id: 1, name: 'Odmowa udzielenia urlopu okolicznościowego', href: '#' },
  {
    id: 2,
    name: 'Czy żołnierz ma prawo do bycia offline?',
    href: '#'
  },
  { id: 3, name: 'Czym jest upadłość konsumencka', href: '#' }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  return (
    <Popover className="absolute top-0 w-full z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Kancelaria Radcy Prawnego - Ewa Urbanowicz</span>
            <div className="hidden lg:block">
              <Image src={Logo} alt="" width={907} height={376} />
            </div>
            <div className="lg:hidden relative w-24 h-14">
              <Image src={LogoMobile} alt="" layout="fill" objectFit="contain" />
            </div>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-secondary rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a
              href="#"
              className="relative p-3 text-base uppercase font-medium text-primary transition-all duration-500 before:content-[''] before:absolute before:h-[0.20rem] before:w-0 before:bg-primary before:top-0 before:opacity-0 before:transition-all before:duration-500 hover:before:w-4/12 hover:before:opacity-100 hover:transition-all hover:ease hover:duration-200"
            >
              Strona główna
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      'text-primary group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary'
                    )}
                  >
                    <span className="relative p-3 text-base uppercase font-medium text-primary transition-all duration-500 before:content-[''] before:absolute before:h-[0.20rem] before:w-0 before:bg-primary before:top-0 before:opacity-0 before:transition-all before:duration-500 hover:before:w-4/12 hover:before:opacity-100 hover:transition-all hover:ease hover:duration-200">
                      O Kancelarii
                    </span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-primary',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {about.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-secondary"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>

                        <div className="px-5 py-5 bg-pink-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-white"
                              >
                                <item.icon
                                  icon={item.iconName}
                                  className={classNames(
                                    'flex-shrink-0 h-6 w-6',
                                    item.color
                                  )}
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                              Ostatnie wpisy
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <a
                                    href={post.href}
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="#" className="font-medium text-secondary">
                              {' '}
                              Zobacz wszystkie wpisy{' '}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      'text-primary group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary'
                    )}
                  >
                    <span className="relative p-3 text-base uppercase font-medium text-primary transition-all duration-500 before:content-[''] before:absolute before:h-[0.20rem] before:w-0 before:bg-primary before:top-0 before:opacity-0 before:transition-all before:duration-500 hover:before:w-4/12 hover:before:opacity-100 hover:transition-all hover:ease hover:duration-200">
                      Zakres usług
                    </span>
                    <ChevronDownIcon
                      className={classNames(
                        'text-gray-500 ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {services.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-secondary"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* Kontakt */}
            <Link href="#">
              <a
                href="#"
                className="relative p-3 text-base uppercase font-medium text-primary transition-all duration-500 before:content-[''] before:absolute before:h-[0.20rem] before:w-0 before:bg-primary before:top-0 before:opacity-0 before:transition-all before:duration-500 hover:before:w-4/12 hover:before:opacity-100 hover:transition-all hover:ease hover:duration-200"
              >
                Kontakt
              </a>
            </Link>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="#">
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-secondary transition-transform hover:-translate-y-1 hover:shadow-slate-400"
              >
                <PhoneIcon
                  width={20}
                  height={20}
                  className="text-white mr-2"
                  aria-hidden="true"
                />
                605-357-507
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between pb-4">
                <div className="relative h-24 w-60">
                  <Image alt="Logo" layout="fill" objectFit="contain" src={Logo} />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {about.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-secondary"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {services.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div>
                <Link href="#">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-secondary"
                  >
                    <PhoneIcon
                      width="18"
                      height="18"
                      className="text-white mr-2"
                      aria-hidden="true"
                    />
                    605-357-507
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
