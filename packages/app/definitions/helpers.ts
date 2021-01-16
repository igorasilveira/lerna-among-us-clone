import {mixin} from "lodash";

import {IPoint} from "./global";

export interface ICheckWithingBoundariesProps {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    point: IPoint;
}
