/* eslint-disable no-unused-vars */
import * as p5Types from 'p5';

import {IAction} from './action';
import {IPlayer} from './player';

export interface IMap {
  background: p5Types.Image;
  walls: p5Types.Image;
}

export interface IOverlay {
  name: string;
}

export interface IGameContext {
  player: IPlayer;
  setPlayer: (player: IPlayer | null | ((prevPlayer: IPlayer | null) => IPlayer)) => void;
  map: IMap;
  setMap: (map: IMap | null | ((prevMap: IMap | null) => IMap)) => void;
  actions: IAction[];
  setActions: (actions: IAction[] | null | ((prevAction: IAction[] | null) => IAction[])) => void;
  currentOverlay: IOverlay;
  setCurrentOverlay: (overlay: IOverlay | null | ((previousOverlay: IOverlay | null) => IOverlay)) => void;
}

