import { useState, createContext, useContext } from 'react';

import {
  Container,
  Title,
  Header,
  Item,
  Inner,
  Body,
} from './styles/Accordion';

interface ContextState {
  toggleShow: boolean;
  setToggleShow: React.Dispatch<React.SetStateAction<boolean>>;
}

// Have to Fix: any to specific type
const ToggleContext = createContext<ContextState | null | any>(null);

export default function Accordion({ children }: { children: any }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
};

Accordion.Item = function AccordionItem({
  children,
}: {
  children: JSX.Element[];
}) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item>{children}</Item>;
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({
  children,
}: {
  children: string;
}) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow((toggleShow: boolean) => !toggleShow)}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children }: { children: string }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body>{children}</Body> : null;
};
