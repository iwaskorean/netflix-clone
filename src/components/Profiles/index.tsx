import { Container, Title, List, Item, Picture, Name } from './styles/Profile';

export default function Profiles({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
};

Profiles.List = function ProfilesList({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <List>{children}</List>;
};

Profiles.User = function ProfilesUser({
  onClick,
  children,
}: {
  onClick: () => void;
  children: JSX.Element | JSX.Element[];
}) {
  return <Item onClick={onClick}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src }: { src: string }) {
  return (
    <Picture
      src={src ? `/images/users/${src}.png` : `images/misc/loading.gif`}
    />
  );
};

Profiles.Name = function ProfilesPicture({ children }: { children: string }) {
  return <Name>{children}</Name>;
};
