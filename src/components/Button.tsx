import tw, { styled } from 'twin.macro';

// Interfaces
interface IProps {
  background: 'primary' | 'secondary';
  children: React.ReactText;
  onClick?: () => void;
}

// Component

const StdButton = styled.button(({ background }: IProps) => [
  tw`text-xs py-4 px-6 font-normal tracking-wide rounded-[100px] shadow-xl uppercase outline-none text-white transition-shadow hover:transition-shadow ease-in-out hover:shadow-xl`,
  background === 'primary' && tw`bg-primary`,
  background === 'secondary' && tw`bg-secondary`
]);

const Button = ({ background, children, onClick }: IProps) => (
  <StdButton type="button" background={background} onClick={onClick}>
    {children}
  </StdButton>
);

export default Button;
