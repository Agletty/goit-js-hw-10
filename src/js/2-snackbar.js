import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const delayInput = form.querySelector('[name="delay"]');
const radioButtons = form.querySelectorAll('[name="state"]');

function getPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(delayInput.value);

  const checkedRadioButton = Array.from(radioButtons).find(
    radio => radio.checked
  );
  const state = checkedRadioButton ? checkedRadioButton.value : null;

  const promise = getPromise(delay, state);

  promise
    .then(delay => {
      iziToast.success({
        title: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: `❌ Rejected promise in ${delay}ms`,
      });
    });
});
