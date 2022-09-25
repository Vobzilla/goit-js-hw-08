import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryImages = document.querySelector('.gallery');
const itemMarkup = createGalleryImage(galleryItems);

galleryImages.innerHTML = itemMarkup;

function createGalleryImage(img) {
  return img
    .map(({ preview, description, original }) => {
      return ` <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
