import { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  ButtonLink,
  Container,
  Logo,
  Group,
  Link,
  Search,
  SearchIcon,
  SearchInput,
  Profile,
  Picture,
  Dropdown,
  Feature,
  FeatureCallOut,
  Text,
  PlayButton,
} from './styles/Header';

export default function Header({
  bg,
  children,
  src,
}: {
  bg: boolean;
  children: JSX.Element | JSX.Element[];
  src?: string;
}) {
  return (
    <Background bg={bg} src={src}>
      {children}
    </Background>
  );
}

Header.Frame = function HeaderFrame({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return <Container>{children}</Container>;
};

Header.Group = function HeaderGroup({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Group>{children}</Group>;
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

Header.TextLink = function HeaderTextLink({
  onClick,
  active,
  children,
}: {
  onClick?: () => void;
  active?: string;
  children: string;
}) {
  return (
    <Link active={active} onClick={onClick}>
      {children}
    </Link>
  );
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }: { target: EventTarget & HTMLInputElement }) =>
          setSearchTerm(target.value)
        }
        placeholder="영화나 드라마를 검색하세요."
        active={searchActive}
      />
    </Search>
  );
};

Header.Profile = function HeaderProfile({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Profile>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src }: { src: string }) {
  return <Picture src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Dropdown>{children}</Dropdown>;
};

Header.Feature = function HeaderFeature({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Feature>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
}: {
  children: string;
}) {
  return <FeatureCallOut>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children }: { children: string }) {
  return <Text>{children}</Text>;
};

Header.PlayButton = function HeaderPlayButton({
  children,
}: {
  children: string;
}) {
  return <PlayButton>{children}</PlayButton>;
};
