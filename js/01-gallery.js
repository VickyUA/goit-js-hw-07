import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
container.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));
container.addEventListener('click', handlerClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
}

function handlerClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }

    const source = event.target.dataset.source;

    const galleryItem = galleryItems.find(({ original }) => original === source);
    
    const instance = basicLightbox.create(`
    <div class="modal">
    <img
      class="gallery__image"
      src="${galleryItem.original}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
    </div>
`)

instance.show()
}

console.dir(galleryItems);
