import {useGameState} from '../context/GameContext';

export default function GameOverlay() {
  const {currentOverlay} = useGameState();
  return (
        <div className="
                fixed game-overlay-container
                flex justify-center items-center
                "
        >
            {/* <img className="h-full w-full" src="/gifs/kill.gif"/> */}
            <h1 className="text-3xl text-black font-bold">{currentOverlay.name}</h1>
        </div>
  );
}
