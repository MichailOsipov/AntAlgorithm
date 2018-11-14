import {setAnts} from 'domains/ants';
import {getInputAntsSpeed} from '../input-data-form';
import {initializeAnts} from './initialize-ants';
import {moveAnts} from './move-ants';
import {allAntsFinished} from './all-ants-finished';

export const animateAntsMoving = ({antsPaths, nodes, edges}) => (dispatch, getState) =>
    new Promise((resolve) => {
        let lastTimeAnimated = Date.now();
        let ants = initializeAnts({antsPaths, nodes, edges});
        requestAnimationFrame(function animate() {
            const time = Date.now();
            const timePassed = time - lastTimeAnimated;
            const antsSpeed = getInputAntsSpeed(getState());
            ants = moveAnts({ants, timePassed, nodes, edges, antsSpeed});
            dispatch(setAnts(ants));
            if (allAntsFinished(ants)) {
                resolve();
                return;
            }
            lastTimeAnimated = time;
            requestAnimationFrame(animate);
        });
    });
