/* eslint-disable no-mixed-operators */
import * as p5Types from 'p5';
import _ from 'lodash';

import {PLAYER_COLOR, PLAYER_RADIUS, PLAYER_WALL_DISTANCE} from '../constants/player';
import {useGameState} from '../context/GameContext';
import {BLACK} from '../constants/colors';
import {IPoint} from '../definitions/global';

let p5Instance: p5Types;

export default function useGamePlayer() {
  const {player, setPlayer, map} = useGameState();

  const renderPlayer = () => {
    p5Instance.fill(PLAYER_COLOR);
    p5Instance.ellipse(
      p5Instance.width / 2,
      p5Instance.height / 2,
      PLAYER_RADIUS,
    );
  };

  const updatePlayer = (speed: IPoint) => {
    const wallComparePosition: IPoint = {
      x: player.position.x + PLAYER_RADIUS / 2 * Math.sign(speed.x),
      y: player.position.y + PLAYER_RADIUS / 2 * Math.sign(speed.y),
    };

    if (_.isEqual(map.walls.get(wallComparePosition.x, wallComparePosition.y), BLACK)) {
      return;
    }

    setPlayer({
      ...player,
      position: {
        x: player.position.x + speed.x,
        y: player.position.y + speed.y,
      },
    });
  };

  const setupPlayer = (p5: p5Types) => {
    p5Instance = p5;
  };

  return {
    setupPlayer,
    renderPlayer,
    updatePlayer,
  };
}
