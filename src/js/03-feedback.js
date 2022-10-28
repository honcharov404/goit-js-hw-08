// import trottle from 'lodash.throttle';

// const form = document.querySelector('form');
// const STORAGE_KEY = 'feedback-form-state';
// //const formData = {};
// populateForm();

// form.addEventListener('submit', onSubmitedForm)
// form.addEventListener('input', trottle(
// e =>{
//     let completedForm = localStorage.getItem(STORAGE_KEY);
//     completedForm = completedForm ? JSON.parse(completedForm) : {};
//     completedForm[e.target.name] = e.target.value
//     console.log(completedForm)
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(completedForm))
// }), 500)

// function onSubmitedForm (e){
//     e.preventDefault();
//     e.currentTarget.reset();
//     console.log(localStorage.getItem(STORAGE_KEY));
//     localStorage.removeItem(STORAGE_KEY);
//     }

// function populateForm(){
//     const savedStorage = localStorage.getItem(STORAGE_KEY)

//     if(savedStorage){
//         const savedForm = JSON.parse(savedStorage);
//         console.log(savedForm)
//         Object.entries(savedForm).forEach(([name, value]) => {
//             form.elements[name].value = value; })

//     }
// }

import trottle from 'lodash.throttle';

const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
//const formData = {};
populateForm();

form.addEventListener('submit', onSubmitedForm);
form.addEventListener(
  'input',
  trottle(e => {
    let completedForm = localStorage.getItem(STORAGE_KEY);
    completedForm = completedForm ? JSON.parse(completedForm) : {};
    completedForm[e.target.name] = e.target.value;
    console.log(completedForm);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedForm));
  }),
  500
);

function onSubmitedForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
  const savedStorage = localStorage.getItem(STORAGE_KEY);

  if (savedStorage) {
    const savedForm = JSON.parse(savedStorage);
    console.log(savedForm);
    Object.entries(savedForm).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
