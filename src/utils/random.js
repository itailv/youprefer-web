/* eslint-disable implicit-arrow-linebreak */

const generateRandomInteger = (min, max) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

export default generateRandomInteger;
