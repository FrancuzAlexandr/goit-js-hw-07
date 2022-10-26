import { galleryItems } from "./gallery-items.js";


const galleryContainer = document.querySelector(".gallery");

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
  .map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
     <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a>
     </div>
`;
  })
  .join("");
}

const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", clickImage);

function clickImage (event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
instance.show();

galleryContainer.addEventListener('keydown', event => {
    if(event.code === 'Escape') {
        instance.close();
    }
});
}




