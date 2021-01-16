import Canvas from '../components/Canvas';
import GameOverlay from '../components/GameOverlay';
import {useGameState} from '../context/GameContext';

export default function Game() {
  const {player, currentOverlay} = useGameState();
  return (
    <div>
      <div>
        {currentOverlay && <GameOverlay />}
        <Canvas />
      </div>
      <p className="bg-blue-300">{player?.name}</p>
    </div>
  );
}
