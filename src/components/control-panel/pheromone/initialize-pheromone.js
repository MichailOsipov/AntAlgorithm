export const initializePheromone = (pheromoneInitCount, edges) =>
    edges.map(({from, to}) => ({
        from: from.name,
        to: to.name,
        pheromone: pheromoneInitCount
    }));
