/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/*const id;
 const url;
 const description;
 const likes;
 const = [];*/

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

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


const createObjComment = () => ({
  id: getRandomInteger(1, 500),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME),
});

const createPhotoDescription = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createObjComment),
});

const photosDescriptions = Array.from({length: 25}, createPhotoDescription);

console.log(photosDescriptions);
