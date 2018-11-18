export const randomIntInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const randomItemInArray = array => array[randomIntInRange(0, array.length)];
