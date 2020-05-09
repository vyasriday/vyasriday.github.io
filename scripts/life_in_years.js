const currentDate = new Date();
const year = currentDate.getFullYear();

function createRadioButtons(year, parent) {
  const days = daysInYear(year);
  const totalDaysTillToday = getTotalDaysTillToday();
  var fragment = document.createDocumentFragment();
  for (var i = 1; i <= days; i++) {
    var div = document.createElement('div');
    div.classList.add('day');
    var checkbox = document.createElement('input');
    checkbox.checked = i < totalDaysTillToday ? true : false;
    checkbox.disabled = i > totalDaysTillToday ? true : false;
    checkbox.title =
      i < totalDaysTillToday
        ? 'No Longer Accessible 😅'
        : 'You Still Got It 😃';
    checkbox.style.height = '20px';
    checkbox.style.width = '20px';
    checkbox.type = 'radio';
    div.appendChild(checkbox);
    var span = document.createElement('span');

    span.innerHTML =
      i === totalDaysTillToday ? new Date().toString().substr(4, 6) : i;
    span.className = i === totalDaysTillToday ? 'today' : '';
    div.appendChild(span);
    fragment.appendChild(div);
    div.style.display = 'flex';
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

createRadioButtons(year, '2020-container');
