const currentDate = new Date();
const year = currentDate.getFullYear();

function createRadioButtons(year, parent) {
  const days = daysInYear(year);
  const totalDaysTillToday = getTotalDaysTillToday();
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= days; i++) {
    const div = document.createElement('div');
    div.classList.add('day');
    const radio = document.createElement('input');
    customizeRadioButton(radio, i, totalDaysTillToday);
    div.appendChild(radio);
    const span = document.createElement('span');
    span.innerHTML = i;
    div.appendChild(span);
    fragment.appendChild(div);
  }
  document.getElementById(parent).appendChild(fragment);
}

function daysInYear(year) {
  return year % 4 == 0 ? 366 : 365;
}

function getTotalDaysTillToday() {
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  // count total days passed in the year
  let totalDaysTillToday = 0;
  for (let i = 0; i < month; i++) {
    totalDaysTillToday += months[i];
  }
  totalDaysTillToday += day;
  return totalDaysTillToday;
}

function customizeRadioButton(radio, current, totalDaysTillToday) {
  radio.type = 'radio';
  radio.classList.add('radio');
  setRadioTitle(radio, current, totalDaysTillToday);
  radio.checked = current < totalDaysTillToday ? true : false;
  radio.disabled = current > totalDaysTillToday ? true : false;
  current === totalDaysTillToday ? radio.classList.add('radio-today') : '';
  current > totalDaysTillToday
    ? radio.classList.add('radio-future')
    : radio.classList.add('radio-past');
}

function setRadioTitle(radio, current, totalDaysTillToday) {
  if (current === totalDaysTillToday) {
    radio.title = `${new Date().toString().substr(4, 6)}, That's Today`;
  } else if (current < totalDaysTillToday) {
    radio.title = `It's Gone, No Longer Accessible 😅`;
  } else {
    radio.title = 'You Still Got It 😃, Enjoy Today to Unlock it';
  }
}

function isMobileDevice() {
  return (
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
}

isMobileDevice() ? alert('Mobile Device') : 'Desktop Device';

createRadioButtons(year, '2020-container');
