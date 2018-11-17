import {findEdgeByNodeNames} from 'utils/find-edge-by-node-names';
import {shiftAnt} from './shift-ant';

export const moveAnt = ({
    distanceToMove,
    nodes,
    edges,
    distanceInEdgePassed,
    coordinates,
    antPath,
    fromNodeIndex,
    complete
}) => {
    if (complete) {
        return {
            distanceInEdgePassed,
            coordinates,
            antPath,
            fromNodeIndex,
            complete
        };
    }
    const {distance} = findEdgeByNodeNames(edges, antPath[fromNodeIndex], antPath[fromNodeIndex + 1]);
    if (distance < distanceToMove + distanceInEdgePassed) {
        const newFromNodeIndex = fromNodeIndex + 1;
        const pathCompleted = newFromNodeIndex + 1 === antPath.length;
        if (pathCompleted) {
            return {
                distanceInEdgePassed,
                coordinates: nodes[antPath[newFromNodeIndex]],
                antPath,
                fromNodeIndex: newFromNodeIndex,
                complete: true
            };
        }
        return moveAnt({
            distanceToMove,
            nodes,
            edges,
            distanceInEdgePassed: (distanceToMove + distanceInEdgePassed) - distance,
            coordinates,
            antPath,
            fromNodeIndex: newFromNodeIndex,
            complete
        });
    }

    const newDistanceToEdgePassed = distanceToMove + distanceInEdgePassed;
    return {
        distanceInEdgePassed: newDistanceToEdgePassed,
        coordinates: shiftAnt(
            nodes[antPath[fromNodeIndex]],
            nodes[antPath[fromNodeIndex + 1]],
            newDistanceToEdgePassed,
            distance
        ),
        antPath,
        fromNodeIndex,
        complete
    };
};
