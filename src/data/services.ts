import {
  AcademicCapIcon,
  ArrowCircleDownIcon,
  BookOpenIcon,
  BriefcaseIcon,
  HeartIcon,
  IdentificationIcon,
  OfficeBuildingIcon,
  UserGroupIcon
} from '@heroicons/react/outline';
import PrawoCywilneImg from '../assets/icons/prawo-cywilne/prawo-cywilne.png';
import RodoImg from '../assets/icons/rodo/rodo.png';
import PrawoPracyImg from '../assets/icons/prawo-pracy/prawo_pracy.png';
import PrawoRodzinneImg from '../assets/icons/prawo-rodzinne/prawo-rodzinne-i-opiekuncze.png';
import PrawoMedyczneJpg from '../assets/icons/prawo-medyczne/prawo_medyczne.png';
import PrawoGospodarczeImg from '../assets/icons/prawo-gospodarcze-i-spolek/prawo-gospodarcze-i-spolek.png';
import PrawoUpadloscioweImg from '../assets/icons/prawo-upadlosciowe/prawo_upadlosciowe.png';
import OdpowiedzialnoscImg from '../assets/icons/odpowiedzialnosc-dyscyplinarna/odpowiedzialnosc_dyscyplinarna.png';
import { IService } from '../types/service';

const services: IService[] = [
  {
    id: 1,
    name: 'Prawo cywilne',
    slug: 'prawo-cywilne',
    href: '/zakres-uslug/prawo-cywilne',
    icon: BookOpenIcon,
    image: PrawoCywilneImg
  },
  {
    id: 2,
    name: 'Prawo rodzinne i opiekuńcze',
    slug: 'prawo-rodzinne-i-opiekuncze',
    href: '#',
    icon: UserGroupIcon,
    image: PrawoRodzinneImg
  },
  {
    id: 3,
    name: 'Prawo pracy',
    slug: 'prawo-pracy',
    href: '#',
    icon: BriefcaseIcon,
    image: PrawoPracyImg
  },
  {
    id: 4,
    name: 'Prawo medyczne',
    slug: 'prawo-medyczne',
    href: '#',
    icon: HeartIcon,
    image: PrawoMedyczneJpg
  },
  {
    id: 5,
    name: 'Prawo gospodarcze i spółek',
    slug: 'prawo-gospodarcze-i-spolek',
    href: '#',
    icon: OfficeBuildingIcon,
    image: PrawoGospodarczeImg
  },
  {
    id: 6,
    name: 'Prawo upadłościowe',
    slug: 'prawo-upadlosciowe',
    href: '#',
    icon: ArrowCircleDownIcon,
    image: PrawoUpadloscioweImg
  },
  {
    id: 7,
    name: 'Odpowiedzialność dyscyplinarna',
    slug: 'odpowiedzialnosc-dyscyplinarna',
    href: '#',
    icon: IdentificationIcon,
    image: OdpowiedzialnoscImg,
    cardSize: '1/2'
  },
  {
    id: 8,
    name: 'Ochrona danych osobowych',
    slug: 'rodo',
    href: '#',
    icon: AcademicCapIcon,
    image: RodoImg,
    cardSize: '1/2'
  }
];

export const servicesWithoutIcon = services.map((s) => ({ ...s, icon: null }));

export default services;
