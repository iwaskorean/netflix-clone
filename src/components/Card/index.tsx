import { createContext, useContext, useState } from 'react';
import {
  Container,
  Title,
  Group,
  Entities,
  Item,
  SubTitle,
  Text,
  Meta,
  Image,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Content,
  Maturity,
} from './styles/Card';

interface FeatureCotnextState {
  showFeature: boolean;
  setShowFeature: React.Dispatch<React.SetStateAction<boolean>>;
  itemFeature: {
    description: string;
    docId: string;
    genre: string;
    id: string;
    maturity: string;
    slug: string;
    title: string;
  };
  setItemFeature: React.Dispatch<React.SetStateAction<{}>>;
}

// Have to Fix "any" type
// How to annotate types with createCotnext
export const FeatureContext =
  createContext<FeatureCotnextState | null | any>(null);

export default function Card({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({
  children,
}: {
  children: JSX.Element | JSX.Element[] | undefined;
}) {
  return <Group>{children}</Group>;
};

Card.Title = function CardTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
};

Card.Entities = function CardEntities({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Entities>{children}</Entities>;
};

Card.Item = function CardItem({
  children,
  item,
}: {
  children: JSX.Element | JSX.Element[];
  item: any;
}) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardItem({ src }: { src: string }) {
  return <Image src={src} />;
};

Card.Meta = function CardMeta({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Meta>{children}</Meta>;
};

Card.SubTitle = function CardSubTitle({ children }: { children: string }) {
  return <SubTitle>{children}</SubTitle>;
};

Card.Text = function CardText({ children }: { children: string }) {
  return <Text>{children}</Text>;
};

Card.Feature = function CardText({
  category,
  children,
}: {
  category: string;
  children: string | JSX.Element | JSX.Element[];
}) {
  const { showFeature, itemFeature, setShowFeature } =
    useContext(FeatureContext);

  return showFeature ? (
    <Feature
      src={`images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>
        {children}
      </Content>

      <Group margin="30px 0" flex-direction="row" alignItems="center">
        <Maturity rating={itemFeature.maturity}>
          {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
        </Maturity>
        <FeatureText fontWeight="bold">
          {itemFeature.genre.charAt(0).toUpperCase() +
            itemFeature.genre.slice(1)}
        </FeatureText>
      </Group>
    </Feature>
  ) : null;
};
