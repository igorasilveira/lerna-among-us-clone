import {setTimeout} from 'timers';

import * as p5Types from 'p5';

import {ACTION_WIDTH} from '../constants/actions';
import {TASK_PLAYER_DISTANCE_TRIGGER} from '../constants/task';
import {useGameState} from '../context/GameContext';
import {IAction} from '../definitions/action';
import {checkWithingBoundaries} from '../helpers/PointHelper';
import {ITask, TaskType} from '../definitions/task';

import useGameTask from './useGameTask';

let p5Instance: p5Types;
const actions: IAction[] = [];

export default function useGameAction() {
  const {tasks, completeTask} = useGameTask();
  const {player, actions: currentActions, setActions, setCurrentOverlay} = useGameState();

  const renderActions = () => {
    actions.forEach((action) => {
      if (currentActions.find((item) => item.name === action.name)) {
        p5Instance.image(
          action.image,
          action.position.x,
          action.position.y,
          ACTION_WIDTH,
          ACTION_WIDTH,
        );
      }
    });
  };

  const updateActions = () => {
    const actionsCopy = currentActions;
    const actionsCountObject = Object.values(TaskType)
      .reduce((accum, key) => ({...accum, [key]: 0}), {});

    // eslint-disable-next-line @shopify/prefer-early-return
    tasks.forEach((task) => {
      if (p5Instance.dist(
        task.position.x,
        task.position.y,
        player.position.x,
        player.position.y,
        ) <= TASK_PLAYER_DISTANCE_TRIGGER) {
        const actionIndex = actionsCopy
          .findIndex((action) => action.name === task.type);

        const newAction = actions.find((action) => {
          return action.name === task.type;
        });

        newAction.payload = {
          data: task,
          type: task.type,
        };

        if (actionIndex < 0) {
          actionsCopy.push(newAction);
        }

        actionsCountObject[task.type]++;
      }
    });

    // eslint-disable-next-line @shopify/prefer-early-return
    Object.keys(actionsCountObject).forEach((key) => {
      if (actionsCountObject[key] === 0) {
        const actionIndexToDelete = actionsCopy
          .findIndex((action) => action.name === key);

        if (actionIndexToDelete > -1) {
          actionsCopy.splice(actionIndexToDelete, 1);
        }
      }
    });

    setActions(actionsCopy);
  };

  const preloadActions = (p5: p5Types) => {
    p5Instance = p5;
    Object.values(TaskType).forEach((type) => {
      const actionImage = p5.loadImage(`/actions/${type}.png`);
      const action: IAction = {
        name: type,
        image: actionImage,
        position: {
          x: 0,
          y: 0,
        },
        payload: null,
      };
      actions.push(action);
    });
  };

  const setupActions = () => {
    let nextY = p5Instance.height;
    actions.forEach((action) => {
      action.position = {
        x: p5Instance.width - action.image.width / 2,
        y: nextY - action.image.height / 2,
      };

      nextY = action.position.y;
    });
  };

  const clickedActions = () => {
    actions.forEach((action) => {
      if (!checkWithingBoundaries({
        minX: action.position.x,
        maxX: action.position.x + action.image.width,
        minY: action.position.y,
        maxY: action.position.y + action.image.height,
        point: {
          x: p5Instance.mouseX,
          y: p5Instance.mouseY,
        },
      }) || !currentActions.find((item) => item.name === action.name)) {
        return;
      }

      // Kill specific
      setCurrentOverlay({
        name: action.name,
      });

      // Task specific
      completeTask((action.payload.data as ITask).id);

      setTimeout(() => {
        setCurrentOverlay(null);
      }, 3000);
    });
  };

  return {
    renderActions,
    updateActions,
    preloadActions,
    setupActions,
    clickedActions,
  };
}
