import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';

export type TSize = '1/2' | '1/3' | 'full';

const CardBase = styled.a(({ size }: { size: TSize }) => [
  tw`relative flex place-items-center flex-col rounded-md px-8 py-4 hover:bg-gray-200 cursor-pointer transition-all duration-500`,
  size === '1/2' && tw`w-full md:w-1/3 lg:w-1/3`,
  size === '1/3' && tw`w-full md:w-1/3 lg:w-1/4`,
  size === 'full' && tw`w-full`
]);

const Title = styled.h3(() => [tw`text-gray-500 text-xl text-center mt-5`]);

interface IProps {
  image: StaticImageData;
  title: string;
  url: string;
  size?: TSize;
}

const ServiceCard = ({ image, title, url, size = '1/3' }: IProps) => (
  <Link passHref href={url}>
    <CardBase size={size}>
      <Image alt={title} width={100} height={100} src={image} />
      <Title>{title}</Title>
    </CardBase>
  </Link>
);

export default ServiceCard;
