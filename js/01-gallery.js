import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = galleryItems
  .map(({preview, original, description}) => {
    return `
    <li class = "gallery__item">
    <a class = "gallery__link" href= "${original}">
    <img  
    class = "gallery__image" 
    data-source = "${original}" 
    src = ${preview} 
    alt = "${description}">
    </a>
    </li>
    `;
  })
  .join('');

galleryRef.addEventListener("click", openModalGallery);

function openModalGallery(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280" height="auto">`, {
        onShow: () => window.addEventListener("keydown", onEsc),
        onClose: () => window.removeEventListener("keydown", onEsc)
    });
        
        function onEsc(event) {
            if (event.code === "Escape") {
                instance.close();
              }
          }
    instance.show();
  }
console.log(galleryItems);
