export const allAntsFinished = ants =>
    ants.every(({complete}) => complete === true);
