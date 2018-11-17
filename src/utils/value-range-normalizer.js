export const valueRangeNormalizer = (from, to) => value =>
    Math.min(to, Math.max(value, from));
