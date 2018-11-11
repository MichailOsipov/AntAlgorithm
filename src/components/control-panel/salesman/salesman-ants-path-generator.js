import {
    initializePheromone,
    updatePheromone
} from '../pheromone';
import {getAntsPathsSalesman} from './get-ants-paths-salesman';

export function* salesmanAntsPathGenerator({
    pheromoneInitCount,
    pheromoneGrowthCount,
    antsCount,
    nodes,
    edges
}) {
    let antsPheromone = initializePheromone(pheromoneInitCount, edges);
    while (true) {
        const antsPaths = getAntsPathsSalesman({
            antsCount,
            edges,
            nodes,
            antsPheromone
        });
        yield antsPaths;
        antsPheromone = updatePheromone(antsPheromone, pheromoneGrowthCount, antsPaths, nodes, edges);
    }
}
