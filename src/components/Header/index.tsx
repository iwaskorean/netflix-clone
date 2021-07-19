import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, ButtonLink, Container, Logo } from './styles/Header';

export default function Header({
  children,
  src,
}: {
  src: string;
  children: any;
}) {
  return <Background src={src}>{children}</Background>;
}

Header.Frame = function HeaderFrame({
  children,
  ...restProps
}: {
  children: any;
}) {
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({
  children,
  to,
  ...restProps
}: {
  to: string;
  children: any;
}) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

Header.Logo = function HeaderLogo({
  to,
  ...restProps
}: {
  to: string;
  alt: string;
  src: string;
}) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
