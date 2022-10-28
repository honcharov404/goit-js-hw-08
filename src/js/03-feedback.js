import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

onFillingForm();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener(
  'input',
  throttle(e => {
    let completedForm = localStorage.getItem(STORAGE_KEY);

    completedForm = completedForm ? JSON.parse(completedForm) : {};
    completedForm[e.target.name] = e.target.value;
    console.log(completedForm);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedForm));
  }),
  500
);

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}

function onFillingForm() {
  const savedStorage = localStorage.getItem(STORAGE_KEY);

  if (savedStorage) {
    const savedForm = JSON.parse(savedStorage);
    console.log(savedForm);
    Object.entries(savedForm).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}
