import {getRandomInteger, getUniqueRandomInteger, getRandomArrayElement} from './util.js';
import {
  MIN_COMMENTS,
  MAX_COMMENTS,
  PHOTOS_COUNT,
  MIN_LIKES,
  MAX_LIKES,
  MESSAGE,
  NAME,
  DESCRIPTION
} from './constants.js';

const getPhotoId = getUniqueRandomInteger(1, PHOTOS_COUNT);
const getPhotoUrl = getUniqueRandomInteger(1, PHOTOS_COUNT);
const getCommentId = getUniqueRandomInteger(0, 500);

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

export {getPhotosDescriptions, PHOTOS_COUNT};
