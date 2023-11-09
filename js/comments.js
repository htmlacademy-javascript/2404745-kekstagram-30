import './user-modal.js';
const renderComments = (arrComments) => {
  const comment = document.querySelector('#comment')
    .content
    .querySelector('.social__comment');
  const commentBlock = document.querySelector('.social__comments');
  commentBlock.innerHTML = '';
  const commentsFragment = document.createDocumentFragment();
  arrComments.forEach(({avatar, name, message}) => {
    const commentElement = comment.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentsFragment.appendChild(commentElement);
  });
  commentBlock.appendChild(commentsFragment);
};

export {renderComments};
