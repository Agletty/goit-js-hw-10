import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const delayEl = form.querySelector('[name="delay"]');
const radioButton = form.querySelector('[name="state"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(delayEl.value);

  const state = radioButton.checked ? 'fulfilled' : 'rejected';

  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      resolve(delay);
    } else {
      reject(delay);
    }
  });

  setTimeout(() => {
    promise
      .then(delay => {
        iziToast.success({
          title: '✅ Fulfilled promise',
          message: `in ${delay}ms`,
        });
      })
      .catch(delay => {
        iziToast.error({
          title: '❌ Rejected promise',
          message: `in ${delay}ms`,
        });
      });
  }, delay);
});
