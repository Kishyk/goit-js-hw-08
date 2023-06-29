import throttle from 'lodash.throttle';


const feedbackFormElement = document.querySelector('.feedback-form');


const saveToLocalStorage = throttle((formData) => {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500);

feedbackFormElement.addEventListener('input', (evt) => {
  const formData = Object.fromEntries(new FormData(feedbackFormElement).entries());
  saveToLocalStorage(formData)
});


const storageFormData = localStorage.getItem("feedback-form-state");
if (storageFormData) {
  const storageFormDataParsed = JSON.parse(storageFormData)
  feedbackFormElement.email.value = storageFormDataParsed.email
  feedbackFormElement.message.value = storageFormDataParsed.message
}


feedbackFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const formData = Object.fromEntries(new FormData(feedbackFormElement).entries());
  console.log(formData)
  feedbackFormElement.reset()
  localStorage.removeItem("feedback-form-state")
});

