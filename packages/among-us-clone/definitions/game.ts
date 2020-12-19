/* eslint-disable no-unused-vars */
import * as p5Types from 'p5';

import {IPlayer} from './player';

export interface IMap {
  background: p5Types.Image;
  walls: p5Types.Image;
}
export interface IGameContext {
  player: IPlayer;
  setPlayer: (player: IPlayer | null | ((prevPlayer: IPlayer | null) => IPlayer)) => void;
  map: IMap;
  setMap: (map: IMap | null | ((prevMap: IMap | null) => IMap)) => void;
}

