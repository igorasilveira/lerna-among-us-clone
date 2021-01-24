import React, { ReactNode, useState } from 'react';
import { IAction } from '../definitions/action';
import { IGameContext, IMap, IOverlay } from '../definitions/game';
import { IPlayer } from '../definitions/player';

const GameContext = React.createContext<IGameContext | undefined>(undefined);

const GameProvider = ({ children }: { children: ReactNode }): ReactNode => {
  const [player, setPlayer] = useState<IPlayer | null>({
    name: 'Igor',
    position: { x: 400, y: 300 },
  });
  const [map, setMap] = useState<IMap | null>(null);
  const [actions, setActions] = useState<IAction[]>([]);
  const [currentOverlay, setCurrentOverlay] = useState<IOverlay>(null);

  return (
    <GameContext.Provider
      value={{
        player,
        setPlayer,
        map,
        setMap,
        actions,
        setActions,
        currentOverlay,
        setCurrentOverlay,
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

export { GameContext, GameProvider, useGameState };
