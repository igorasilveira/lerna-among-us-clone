import React, {ReactNode, useState} from 'react';

import {IGameContext, IMap} from '../definitions/game';
import {IPlayer} from '../definitions/player';

const GameContext = React.createContext<IGameContext | undefined>(undefined);

const GameProvider = ({children}: {children: ReactNode }): ReactNode => {
  const [player, setPlayer] = useState<IPlayer | null>({
    name: 'Igor',
    position: {x: 100, y: 100},
  });
  const [map, setMap] = useState<IMap | null>(null);

  return (
    <GameContext.Provider value={{
      player,
      setPlayer,
      map,
      setMap,
    }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameState = () => {
  const context = React.useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameProvider');
  }
  return context;
};

export {
  GameContext,
  GameProvider,
  useGameState,
};
