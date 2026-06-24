import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const query = formData.get('search-text');

  getImagesByQuery(query)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    });
});
