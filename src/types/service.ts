import { ArrowCircleDownIcon } from '@heroicons/react/outline';
import { TSize } from '../components/ServiceCard';

export interface IService {
  id: number;
  name: string;
  slug: string;
  href: string;
  items?: string[];
  icon: typeof ArrowCircleDownIcon;
  image: StaticImageData;
  imagePath: string;
  cardSize?: TSize;
  backgroundColor: string;
  textColor: string;
}
