import ReactDOM from 'react-dom';
import { createContext, useContext, useState } from 'react';
import { Container, Overlay, Inner, Close, Button } from './styles/player';

interface PlayerContextState {
  showPlayer: boolean;
  setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>;
}

// Have to Fix
export const PlayerContext = createContext<PlayerContextState | any>(null);

export default function Player({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src }: { src: string }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton() {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return (
    <Button onClick={() => setShowPlayer((showPlayer: boolean) => !showPlayer)}>
      Play
    </Button>
  );
};
