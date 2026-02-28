'use strict';

const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

if (savedData) {
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
  form.email.value = formData.email;
  form.message.value = formData.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
