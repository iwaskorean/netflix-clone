import { Container, Title, SubTitle } from './styles/Feature';

export default function Feature({ children }: { children: JSX.Element[] }) {
  return <Container>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({
  children,
}: {
  children: string;
}) {
  return <SubTitle>{children}</SubTitle>;
};
