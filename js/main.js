const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const PHOTOS_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [ 'Николай', 'Елена', 'Василий', 'Иван', 'Анна', 'Андрей' ];

const DESCRIPTION = ['Городская площадь', 'На пляже', 'Городская ратуша', 'Статуя в парке', 'В лесу', 'Празднование дня рождения', 'В порту' ];

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

const getPhotoId = getUniqueRandomInteger(1, PHOTOS_COUNT);
const getPhotoUrl = getUniqueRandomInteger(1, PHOTOS_COUNT);
const getCommentId = getUniqueRandomInteger(0, 999);


const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME),
});

const getComments = (n)=> Array.from({length: n}, createComment);

const createPhotoDescription = () => ({
  id: getPhotoId(),
  url: `photos/${getPhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
});

const getPhotosDescriptions = (n) => Array.from({length: n}, createPhotoDescription);


// eslint-disable-next-line no-console
console.log(getPhotosDescriptions(PHOTOS_COUNT));
