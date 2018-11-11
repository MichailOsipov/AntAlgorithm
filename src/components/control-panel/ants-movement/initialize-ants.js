export const initializeAnts = (nodes, antsPaths) =>
    antsPaths.map((antsPath) => {
        const startNode = nodes.find(({name}) => name === antsPath[0]);
        const nextNodeName = nodes.find(({name}) => name === antsPath[1]);
        return {
            x: startNode.x,
            y: startNode.y,
            nextNodeName
        };
    });
