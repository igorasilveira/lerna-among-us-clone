/* eslint-disable no-mixed-operators */
import * as p5Types from 'p5';

import {useGameState} from '../context/GameContext';

let p5Instance: p5Types;
let x = 0; let
  y = 0;

export default function useGameMap() {
  const {player, map, setMap} = useGameState();

  const renderMap = () => {
    p5Instance.image(
      map.background,
      0, 0,
      p5Instance.width,
      p5Instance.height,
      x, y,
      p5Instance.width,
      p5Instance.height,
    );
  };

  const updateMap = () => {
    x = p5Instance.width / 2 + player.position.x;
    y = p5Instance.height / 2 + player.position.y;
  };

  const setupMap = (p5: p5Types) => {
    p5Instance = p5;
    const background = p5Instance.loadImage('background.jpeg');
    const walls = p5Instance.loadImage('walls.jpg');
    setMap({
      background,
      walls,
    });
  };

  return {
    setupMap,
    renderMap,
    updateMap,
  };
}
