import { useEffect } from 'react';
import Canvas from '../components/Canvas';
import GameOverlay from '../components/GameOverlay';
import { useGameState } from '../context/GameContext';
import useSocket from '../hooks/useSocket';

export default function Game() {
  const { player, currentOverlay } = useGameState();
  const { emit, addEventListener, removeListener } = useSocket();

  const onServerUpdate = (data: any) => {
    console.log(`[ServerUpdate]: ${data}`);
  };

  useEffect(() => {
    addEventListener('serverUpdate', onServerUpdate);
    return () => {
      removeListener('serverUpdate');
    };
  }, []);

  const sendEvent = () => {
    console.log('[sendEvent] Sending event...');
    emit('test', 'hello', (response) => {
      console.log('[sendEvent] Got response:', response);
    });
  };

  return (
    <div>
      <div>
        {currentOverlay && <GameOverlay />}
        <Canvas />
      </div>
      <button type="button" onClick={sendEvent}>
        Send event
      </button>
      <p className="bg-blue-300">{player?.name}</p>
    </div>
  );
}
