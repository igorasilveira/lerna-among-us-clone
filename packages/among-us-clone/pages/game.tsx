import React from 'react';
import Canvas from '../components/Canvas';
import { useGameState } from '../context/GameContext';

export default function Game() {
  const { player } = useGameState();
  return (
    <div>
      <Canvas />
      <p className="bg-blue-300">{player?.name}</p>
    </div>
  );
}
