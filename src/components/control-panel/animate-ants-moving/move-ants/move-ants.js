import {moveAnt} from './move-ant';

// if path is cycle it won't stop
export const moveAnts = ({ants, timePassed, nodes, edges, antsSpeed}) => {
    const secondsPassed = timePassed / 1000;
    const distanceToMove = antsSpeed * secondsPassed;
    return ants.map(ant => moveAnt({
        distanceToMove,
        nodes,
        edges,
        ...ant
    }));
};
