import {setAnts} from 'domains/ants';
import {initializeAnts} from './initialize-ants';
import {moveAnts} from './move-ants';
import {allAntsFinished} from './all-ants-finished';

export const animateAntsMoving = ({antsPaths, nodes, edges}) => dispatch =>
    new Promise((resolve) => {
        let lastTimeAnimated = Date.now();
        let ants = initializeAnts({antsPaths, nodes, edges});
        requestAnimationFrame(function animate() {
            const time = Date.now();
            const timePassed = time - lastTimeAnimated;
            ants = moveAnts({ants, timePassed, nodes, edges});
            dispatch(setAnts(ants));
            if (allAntsFinished(ants)) {
                resolve();
                return;
            }
            lastTimeAnimated = time;
            requestAnimationFrame(animate);
        });
    });
