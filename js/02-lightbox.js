import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryContainer = document.querySelector(".gallery");

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
}

const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

const lightBox = new SimpleLightbox(".gallery a", {captionDelay: 250, captionsData: "alt"})





