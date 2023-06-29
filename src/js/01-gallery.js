import {galleryItems} from './gallery-items.js'
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'


const galleryList = document.querySelector('.gallery');


let galleryItemsElement = "";
galleryItems.forEach((item) => {
  galleryItemsElement = galleryItemsElement + `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      />
   </a>
</li>`
})

galleryList.insertAdjacentHTML('beforeend', galleryItemsElement);

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
