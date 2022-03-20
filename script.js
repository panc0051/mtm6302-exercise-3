const $today = document.getElementById('today');
const $saved = document.getElementById('saved');
const $form = document.getElementById('form');
const $title = document.getElementById('title');
const $datetime = document.getElementById('datetime');

//date constructor: Date()
// create a date instances using new 
const today = new Date();
const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric', // numeric: 2022, 2-digit: 22
    hour: '2-digit', // numeric: 10, 2-digit: 10
    minute: '2-digit'
}

//Data for Usename


//insert today into the $today
$today.textContent = today.toLocaleString('en-CA', options);
$form.addEventListener('submit', save);

e.preventDefault()

//get the title
const title = $title.value;

//get the datetime
//create a date instance using new
const datetime = new Date($datetime.value);

$saved.textContent = `${title} was saved on ${datetime.toLocaleString('en-CA', options)}`;
})


// $form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const title = $title.value;
//     const datetime = $datetime.value;
//     const event = {
//         title,
//         datetime
//     }
//     //save to local storage
//     saveEvent(event);
//     //clear the form
//     $form.reset();
// })