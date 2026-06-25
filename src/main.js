import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-function';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.form');

const gallery = document.querySelector('.gallary');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const query = formData.get('search-text');

  getImagesByQuery(query)
    .then(response => {
      const images = response.data.hits;
      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      console.log(images);
    })
    .catch(error => {
      console.log(error);
    });
});
