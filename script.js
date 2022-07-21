// Form Data
const formData = [
    'Full Name :',
    'job Type :',
    'Job Location :',
    'job Description :',

]

console.log(formData);


// //Retrieve the elements from DOM
const $form = document.getElementById('form');
const $formTitle = document.getElementById('form-title');
const $formType = document.getElementById('form-type');
const $formLocation = document.getElementById('form-location');
const $formDescription = document.getElementById('form-description');
const $formSaved = document.getElementById('form-saved ');
const $formSubmit = document.getElementById('form-submit');
const $today = document.getElementById('today');

// insert todays date
const today = new Date();
$today.textContent = today.toDateString('en-US');
// // create empty array to hold html
let formHtml = [];

// 

$form.addEventListener('submit', function (e) {
    e.preventDefault();

    // clear the form
    $form.reset();
});
