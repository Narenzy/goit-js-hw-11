import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;

  const formData = new FormData(formEl);
  const query = formData.get('search-text');

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(response => {
      hideLoader();
      const images = response.data.hits;
      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(images);
      form.reset();
    })
    .catch(error => {
      hideLoader();
      console.log(error);
    });
});
