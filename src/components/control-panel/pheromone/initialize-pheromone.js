export const initializePheromone = (pheromoneInitCount, edges) =>
    edges.map(({from, to}) => ({
        from,
        to,
        pheromone: pheromoneInitCount
    }));
