const photosItem = document.querySelector('#picture').content.querySelector('a');
const photoList = document.querySelector('.pictures');

const photoElement = document.createDocumentFragment();

const removeCards = () => {
  document.querySelectorAll('.picture').forEach((card) => {
    card.remove();
  });
};

const renderPhotos = (photoArray) => {
  photoArray.forEach(({url, description, likes, comments}) => {
    const photo = photosItem.cloneNode(true);
    photo.querySelector('.picture__img').src = url;
    photo.querySelector('.picture__img').alt = description;
    photo.querySelector('.picture__likes').textContent = likes;
    photo.querySelector('.picture__comments').textContent = comments.length;

    photoElement.appendChild(photo);
  });
  removeCards();
  photoList.appendChild(photoElement);
};
export {renderPhotos};


