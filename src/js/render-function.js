export function createGallery(images) {
  return images
    .map(image => {
      return `
        <li>
            <a href="${image.largeImageURL}">
              <img src="${image.webformatURL}" alt="${image.tags}"/>
          </a>

          <p>Likes:${image.likes}</p>
          <p>Views:${image.views}</p>
          <p>Comments:${image.comments}</p>
          <p>Downloads:${image.downloads}</p>
    
        </li>`;
    })
    .join('');
}
