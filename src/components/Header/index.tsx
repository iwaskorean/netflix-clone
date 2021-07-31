import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, ButtonLink, Container, Logo } from './styles/Header';

export default function Header({
  bg,
  children,
}: {
  bg: boolean;
  children: JSX.Element | JSX.Element[];
}) {
  return <Background bg={bg}>{children}</Background>;
}

Header.Frame = function HeaderFrame({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return <Container>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({
  children,
  to,
}: {
  to: string;
  children: string;
}) {
  return <ButtonLink to={to}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({
  to,
  alt,
  src,
}: {
  to: string;
  alt: string;
  src: string;
}) {
  return (
    <ReactRouterLink to={to}>
      <Logo src={src} alt={alt} />
    </ReactRouterLink>
  );
};
