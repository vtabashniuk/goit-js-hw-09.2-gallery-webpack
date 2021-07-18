export default function (images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" loading="lazy" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
    </li>
    `;
    })
    .join(' ');
}
