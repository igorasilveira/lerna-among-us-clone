import React, {useEffect, useState} from 'react';
import * as p5Types from 'p5';
import dynamic from 'next/dynamic';

import Joystick from '../classes/Joystick';
import useGameMap from '../hooks/useGameMap';
import useGamePlayer from '../hooks/useGamePlayer';
import useGameTask from '../hooks/useGameTask';
import useGameAction from '../hooks/useGameAction';
import {useGameState} from '../context/GameContext';

const Sketch = dynamic(
  () => import('react-p5'),
  {ssr: false},
);

let joystick: Joystick;

export default function Canvas() {
  const {setupMap, renderMap, updateMap} = useGameMap();
  const {setupActions, preloadActions, renderActions, updateActions, clickedActions} = useGameAction();
  const {setupTasks, renderTasks, updateTasks} = useGameTask();
  const {setupPlayer, renderPlayer, updatePlayer} = useGamePlayer();
  const {currentOverlay} = useGameState();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(700, 400).parent(canvasParentRef);
    setupActions();
    joystick = new Joystick(100, p5.height - 100, 100, p5);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    const speed = joystick.update();
    updatePlayer(speed);
    updateTasks();
    updateActions();
    updateMap();
    renderMap();
    renderTasks();
    renderPlayer();
    renderActions();
    joystick.render();
  };

  const preload = (p5: p5Types) => {
    setupMap(p5);
    setupPlayer(p5);
    setupTasks(p5);
    preloadActions(p5);
  };

  const touchStarted = () => {
    if (currentOverlay) { return; }
    joystick.activateJoystick(true);
  };

  const touchEnded = () => {
    joystick.activateJoystick(false);
  };

  const mouseClicked = () => {
    if (currentOverlay) { return; }
    clickedActions();
  };

  return (
    <>
      {!ready && <p>Loading...</p>}
      {ready &&
        <Sketch
          setup={setup}
          draw={draw}
          preload={preload}
          touchStarted={touchStarted}
          touchEnded={touchEnded}
          mouseClicked={mouseClicked}
        />}
    </>
  );
}
