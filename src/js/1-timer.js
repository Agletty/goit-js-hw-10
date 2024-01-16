import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let intervalId;
let userSelectedDate = null;
let isTimerRunning = false;

startButton.disabled = true;

startButton.addEventListener('click', onStartTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
};

flatpickr(input, options);

function onClose(selectedDates) {
  const currentDate = Date.now();
  if (selectedDates[0] < currentDate) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
    });
    startButton.disabled = true;
  } else {
    if (isTimerRunning) {
      input.disabled = true;
    } else {
      userSelectedDate = selectedDates[0];
      startButton.disabled = false;
    }
  }
}

function onStartTimer() {
  if (!userSelectedDate) {
    return;
  }

  startButton.disabled = true;

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    const currentDate = Date.now();
    const diff = userSelectedDate - currentDate;
    updateData(convertMs(diff));

    if (diff <= 0) {
      clearInterval(intervalId);

      if (isTimerRunning === false) {
        input.disabled = true;
      }
    }
  }, 1000);

  isTimerRunning = true;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.max(0, Math.floor(ms / day)));
  const hours = addLeadingZero(Math.max(0, Math.floor((ms % day) / hour)));
  const minutes = addLeadingZero(
    Math.max(0, Math.floor(((ms % day) % hour) / minute))
  );
  const seconds = addLeadingZero(
    Math.max(0, Math.floor((((ms % day) % hour) % minute) / second))
  );
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateData({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}
