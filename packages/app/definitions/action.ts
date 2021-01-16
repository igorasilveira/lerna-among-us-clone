import * as p5Types from 'p5';

import {IPoint} from './global';
import {ITask, TaskType} from './task';

export interface IActionPayload {
    type: TaskType;
    data: ITask;
}

export interface IAction {
    image: p5Types.Image;
    name: TaskType;
    position: IPoint;
    payload: IActionPayload;
}
