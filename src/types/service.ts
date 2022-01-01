import { ArrowCircleDownIcon } from '@heroicons/react/outline';
import { TSize } from '../components/ServiceCard';

export interface IService {
  id: number;
  name: string;
  slug: string;
  href: string;
  content?: string[];
  icon: typeof ArrowCircleDownIcon;
  image: StaticImageData;
  cardSize?: TSize;
}
