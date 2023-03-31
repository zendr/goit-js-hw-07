import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryIt = document.querySelector('.gallery');

const gallerySelector = (images) => {
    return images
        .map(({ preview, original, description }) => {
            return `<div class = "gallery__item"><a class = "gallery__link" href = ${original}><img class = "gallery__image" src = "${preview}" data-source = ${original} alt = "${description}"></div>`;
        })
        .join('');
};

const imagesMarkup = gallerySelector(galleryItems);

galleryIt.insertAdjacentHTML('afterbegin', imagesMarkup);
galleryIt.addEventListener('click', gallerySelect);

function gallerySelect(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(
        `<img src = "${event.target.dataset.source}" width = "800" height = "600">`
    );
    instance.show();
    window.addEventListener('keydown', onCloseModalClick);
}
    
function onCloseModalClick(event) {
    const openInstance = document.querySelector(".basicLightbox")
    if (event.code === "Escape") {
        openInstance.remove();
           window.removeEventListener('keydown', onCloseModalClick);  
    }

}
