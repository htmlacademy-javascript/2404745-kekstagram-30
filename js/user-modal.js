import './photos.js';
import {renderComments} from './comments.js';
const modalWindow = document.querySelector('.big-picture');
const photoList = document.querySelector('.pictures');
const bigPhoto = modalWindow.querySelector('.big-picture__img')
  .querySelector('img');
const likesCount = modalWindow.querySelector('.likes-count');
const commentShownCount = modalWindow.querySelector('.social__comment-shown-count');
const commentTotalCount = modalWindow.querySelector('.social__comment-total-count');
const socialCaption = modalWindow.querySelector('.social__caption');
const buttonCansel = modalWindow.querySelector('#picture-cancel');

photoList.addEventListener('click', (evt) => {
  modalWindow.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  const photo = evt.target.parentElement;
  bigPhoto.src = photo.url;
  likesCount.textContent = photo.likes;
  commentShownCount.textContent = photo.comments.length;
  commentTotalCount.textContent = photo.comments.length;
  renderComments(photo.comments);
  socialCaption.textContent = photo.description;
  modalWindow.querySelector('.social__comment-count')
    .classList.add('hidden');
  modalWindow.querySelector('.comments-loader')
    .classList.add('hidden');
});

buttonCansel.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    modalWindow.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});
