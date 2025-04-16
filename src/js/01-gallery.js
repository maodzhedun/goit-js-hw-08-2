// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");

function createMarkUp(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
      
      <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>
  `
    )
    .join("");
}

galleryEl.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));

galleryEl.addEventListener("click", onClickGallery);

function onClickGallery(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  showImage();
}

function showImage(target) {
  new SimpleLightbox(".gallery a", {
    nav: true,
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    close: true,
    download: "downloads",
  });
}
