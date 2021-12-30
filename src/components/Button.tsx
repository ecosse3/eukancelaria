import styled from 'styled-components';
import tw from 'twin.macro';

// Interfaces
interface IProps {
  background: 'primary' | 'secondary';
  children: React.ReactText;
  className?: string & React.CSSProperties;
  onClick?: () => void;
}

// Component

const StdButton = styled.button(({ background }: IProps) => [
  tw`
  text-xs
  text-white
  font-normal
  uppercase
  tracking-wide
  py-4
  px-6
  rounded-[100px]
  shadow-xl
  outline-none
  transition-all
  ease-in-out
  hover:transition-all
  hover:shadow-xl`,
  background === 'primary' && tw`bg-primary`,
  background === 'secondary' && tw`bg-secondary-400 hover:bg-secondary-500`
]);

const Button = ({ background, className, children, onClick }: IProps) => (
  <StdButton
    background={background}
    className={className}
    onClick={onClick}
    type="button"
  >
    {children}
  </StdButton>
);

export default Button;
