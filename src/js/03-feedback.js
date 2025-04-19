import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';

const formEL = document.querySelector('.feedback-form');

let userData = {};

formEL.addEventListener('input', throttle(onFormData, 500));
formEL.addEventListener('submit', onSubmit);

loadingPage();

function onFormData(event) {
  userData[event.target.name] = event.target.value;

  localStorage.setItem(FORM_KEY, JSON.stringify(userData));
}

function loadingPage() {
  const fillInput = localStorage.getItem(FORM_KEY);
  if (!fillInput) {
    return;
  }
  userData = JSON.parse(fillInput);
  console.log(userData);
  Object.entries(userData).forEach(([key, val]) => {
    formEL.elements[key].value = val;
  });
}

function onSubmit(event) {
  event.preventDefault();
  console.log(userData);
  localStorage.removeItem(FORM_KEY);
  formEL.reset();
}
