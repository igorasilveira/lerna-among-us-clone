import * as p5Types from 'p5';

import tasksJSON from '../data/tasks.json';
import {useGameState} from '../context/GameContext';
import {ITask} from '../definitions/task';
import {TASK_COLOR, TASK_RADIUS} from '../constants/task';

let p5Instance: p5Types;
let tasks: ITask[] = [];

export default function useGameTask() {
  const {player} = useGameState();

  const renderTasks = () => {
    p5Instance.fill(TASK_COLOR);
    tasks.forEach((task) => {
      const taskPosition = {
        x: task.position.x - (-p5Instance.width / 2 + player.position.x),
        y: task.position.y - (-p5Instance.height / 2 + player.position.y),
      };
      p5Instance.ellipse(taskPosition.x, taskPosition.y, TASK_RADIUS);
    });
  };

  const updateTasks = () => {

  };

  const completeTask = (id: string): void => {
    const completedTaskIndex = tasks.findIndex((task) => task.id === id);
    tasks.splice(completedTaskIndex, 1);
  };

  const setupTasks = (p5: p5Types) => {
    p5Instance = p5;
    tasks = tasksJSON;
  };

  return {
    renderTasks,
    updateTasks,
    setupTasks,
    tasks,
    completeTask,
  };
}
