export const calculateNodesDistance = ({x: x0, y: y0}, {x: x1, y: y1}) =>
    (((x0 - x1) ** 2) + ((y0 - y1) ** 2)) ** 0.5;
