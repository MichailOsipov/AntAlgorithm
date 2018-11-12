import {findEdgeByNodeNames} from 'utils/find-edge-by-node-names';
import {moveAnt} from './move-ant';

const SPEED_PER_SECOND = 100;

const getNextNodeName = (currNodeName, antPath) => {
    const currNodeIndex = antPath.findIndex(nodeName => nodeName === currNodeName);
    return antPath[currNodeIndex + 1];
};

// make it save and more smart
// if path is cycle it won't stop
export const moveAnts = ({ants, timePassed, nodes, edges}) => {
    const secondsPassed = timePassed / 1000;
    return ants.map(({
        currNodeName,
        nextNodeName,
        distanceInEdgePassed,
        coordinates,
        antPath,
        complete
    }) => {
        if (complete) {
            return {
                currNodeName,
                nextNodeName,
                distanceInEdgePassed,
                coordinates,
                antPath,
                complete
            };
        }
        const distanceToMove = SPEED_PER_SECOND * secondsPassed;
        const {distance} = findEdgeByNodeNames(edges, currNodeName, nextNodeName);
        if (distance > distanceToMove + distanceInEdgePassed) {
            const newDistanceToEdgePassed = distanceToMove + distanceInEdgePassed;
            return {
                currNodeName,
                nextNodeName,
                distanceInEdgePassed: newDistanceToEdgePassed,
                coordinates: moveAnt(
                    nodes[currNodeName],
                    nodes[nextNodeName],
                    newDistanceToEdgePassed,
                    distance
                ),
                antPath,
                complete
            };
        }

        const newNodeNameToMove = getNextNodeName(nextNodeName, antPath);
        if (newNodeNameToMove === undefined) {
            return {
                currNodeName: nextNodeName,
                distanceInEdgePassed,
                coordinates,
                antPath,
                complete: true
            };
        }
        const newDistanceToEdgePassed = (distanceToMove + distanceInEdgePassed) - distance;
        const {distance: newNodesDistance} = findEdgeByNodeNames(edges, nextNodeName, newNodeNameToMove);
        return {
            currNodeName: nextNodeName,
            nextNodeName: newNodeNameToMove,
            distanceInEdgePassed: newDistanceToEdgePassed,
            coordinates: moveAnt(
                nodes[nextNodeName],
                nodes[newNodeNameToMove],
                newDistanceToEdgePassed,
                newNodesDistance
            ),
            antPath
        };
    });
};
