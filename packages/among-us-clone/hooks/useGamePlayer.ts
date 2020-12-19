import React from 'react';
import * as p5Types from 'p5';
import _ from 'lodash';

import {PLAYER_COLOR, PLAYER_RADIUS} from '../constants/player';
import {useGameState} from '../context/GameContext';
import {BLACK} from '../constants/colors';

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
    const updatedPlayerPosition: IPoint = {
      x: player.position.x + speed.x,
      y: player.position.y + speed.y,
    };

    if (_.isEqual(map.walls.get(updatedPlayerPosition.x, updatedPlayerPosition.y), BLACK)) {
      return;
    }

    setPlayer({
      ...player,
      position: {
        ...updatedPlayerPosition,
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
