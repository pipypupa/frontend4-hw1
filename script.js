const galleryContainer = document.querySelector('.gallery');

if (galleryContainer) {
  const galleryMarkup = images.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `).join('');

  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
}

// Додаємо HTML розмітку модального вікна
const modalMarkup = `
  <div class="modal">
    <div class="modal__content">
      <span class="modal__close">&times;</span>
      <img class="modal__image" src="" alt="" />
    </div>
  </div>
`;
document.body.insertAdjacentHTML('beforeend', modalMarkup);

// Отримуємо елементи модального вікна
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__image');
const modalClose = document.querySelector('.modal__close');

// Відкриття модального вікна при кліку на картинку
galleryContainer?.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  
  modal.classList.add('open');
  modalImg.src = event.target.dataset.source;
  modalImg.alt = event.target.alt;
});

// Закриття модального вікна при натисканні на кнопку
modalClose.addEventListener('click', closeModal);

// Закриття модального вікна при натисканні на клавішу Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Функція для закриття модального вікна та очищення src
function closeModal() {
  modal.classList.remove('open');
  modalImg.src = '';
  modalImg.alt = '';
}