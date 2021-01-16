/* eslint-disable no-unused-vars */
import {IPoint} from "./global";

// eslint-disable-next-line no-shadow
export enum TaskType {
  Task = 'task',
  Kill = 'kill'
}

export interface ITask {
  position: IPoint;
  id: string;
  type: TaskType;
}

