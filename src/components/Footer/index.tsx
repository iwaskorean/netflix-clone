import {
  Container,
  Row,
  Column,
  Title,
  Text,
  Link,
  Break,
} from './styles/Footer';

// Have to update
interface Props {
  children: any;
}

interface LinkProps {
  children: any;
  href: string;
}

export default function Footer({ children, ...restProps }: { children: any }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }: Props) {
  return <Row {...restProps}> {children} </Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }: Props) {
  return <Column {...restProps}> {children} </Column>;
};

Footer.Title = function FooterTitle({ children, ...restProps }: Props) {
  return <Title {...restProps}> {children} </Title>;
};

Footer.Text = function FooterText({ children, ...restProps }: Props) {
  return <Text {...restProps}> {children} </Text>;
};

Footer.Link = function FooterLink({ children, href, ...restProps }: LinkProps) {
  return (
    <Link href={href} {...restProps}>
      {children}
    </Link>
  );
};

Footer.Break = function FooterBreak() {
  return <Break />;
};
