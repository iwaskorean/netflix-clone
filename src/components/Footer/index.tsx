import {
  Container,
  Row,
  Column,
  Title,
  Text,
  Link,
  Break,
} from './styles/Footer';

export default function Footer({ children }: { children: JSX.Element[] }) {
  return <Container>{children}</Container>;
}

Footer.Row = function FooterRow({ children }: { children: JSX.Element[] }) {
  return <Row> {children} </Row>;
};

Footer.Column = function FooterColumn({
  children,
}: {
  children: JSX.Element[];
}) {
  return <Column> {children} </Column>;
};

Footer.Title = function FooterTitle({ children }: { children: string }) {
  return <Title> {children} </Title>;
};

Footer.Text = function FooterText({ children }: { children: string }) {
  return <Text> {children} </Text>;
};

Footer.Link = function FooterLink({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  return <Link href={href}>{children}</Link>;
};

Footer.Break = function FooterBreak() {
  return <Break />;
};
