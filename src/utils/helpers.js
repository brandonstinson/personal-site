export const randomIntInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const randomItemInArray = array => array[randomIntInRange(0, array.length - 1)];

export const posOrNeg = () => (Math.floor(Math.random() * 2) ? 1 : -1);
