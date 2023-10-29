import { getPhotosDescriptions } from './data.js';
import { PHOTOS_COUNT } from './constants.js';
import {renderPhotos} from './photos.js';

const photoArray = getPhotosDescriptions(PHOTOS_COUNT);
renderPhotos(photoArray);
