const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqueRandomInteger = (a, b) => {
  const arr = [];
  return function () {
    let flag = true;
    let randomInteger;
    while (flag) {
      randomInteger = getRandomInteger(a, b);
      if (!arr.includes(randomInteger)){
        arr.push (randomInteger);
        flag = false;
        return randomInteger;
      }
    }
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getUniqueRandomInteger, getRandomArrayElement};
