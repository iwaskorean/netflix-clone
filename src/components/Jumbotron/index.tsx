import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction,
}: {
  children: JSX.Element[];
  direction: string;
}) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({
  children,
}: {
  children: JSX.Element[];
}) {
  return <Container>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return <Pane>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
}: {
  children: string;
}) {
  return <SubTitle>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return <Image src={src} alt={alt} />;
};
