import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// Interfaces
interface IProps {
  background: string;
  color: string;
  image: string;
  title: string;
}

// Styles
const HeroIcon = styled.div<{ image: IProps['image']; background: IProps['background'] }>`
  background: ${(props) => props.background};
  ${tw`relative w-full h-[55vh]`};

  &::after {
    content: url(${(props) => props.image});
    ${tw`
      absolute w-[200px] h-[200px] z-10 -bottom-20 left-0 right-0 mx-auto overflow-hidden border-4 border-white bg-white rounded-full scale-75
    `}
    ${tw`md:scale-100`}
  }
`;

const HeroTitle = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  ${tw`flex justify-center items-center max-w-5xl mx-auto h-full uppercase text-5xl text-center font-semibold md:text-7xl`}
`;

// Component
const ServiceHero = ({ background, color, image, title }: IProps) => {
  return (
    <div className="relative mb-28">
      <HeroIcon background={background} image={image}>
        <div className="bubble-animate">
          <div className="circle small square1"></div>
          <div className="circle small square2"></div>
          <div className="circle small square3"></div>
          <div className="circle small square4"></div>
          <div className="circle small square5"></div>
          <div className="circle medium square1"></div>
          <div className="circle medium square2"></div>
          <div className="circle medium square3"></div>
          <div className="circle medium square4"></div>
          <div className="circle medium square5"></div>
          <div className="circle large square1"></div>
          <div className="circle large square2"></div>
          <div className="circle large square3"></div>
          <div className="circle large square4"></div>
        </div>
        <HeroTitle color={color}>{title}</HeroTitle>
      </HeroIcon>
    </div>
  );
};

export default ServiceHero;
