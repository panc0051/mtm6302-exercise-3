const $form = document.getElementById('form');
const $formTitle = document.getElementById('form-title');
const $formType = document.getElementById('form-type');
const $formLocation = document.getElementById('form-location');
const $formDescription = document.getElementById('form-description');
const $formSaved = document.getElementById('form-saved ');
const $formSubmit = document.getElementById('form-submit');


$form.addEventListener('submit', function (e) {
    e.preventDefault();

    // clear the form
    $form.reset();
});