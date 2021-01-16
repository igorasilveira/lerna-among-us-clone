import {ICheckWithingBoundariesProps} from "../definitions/helpers";

const checkWithingBoundaries = (
    {maxX, maxY, minX, minY, point}: ICheckWithingBoundariesProps,
): boolean => {
  return (minX <= point.x && point.x <= maxX) &&
    (minY <= point.y && point.y <= maxY);
};

export {
    checkWithingBoundaries,
};
