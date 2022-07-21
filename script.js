const $today = document.getElementById('today');
const $saved = document.getElementById('saved');
const $form = document.getElementById('form');
const $title = document.getElementById('title');
const $formlabel = document.getElementById('form-label');
const $datetime = document.getElementById('datetime');
const $submit = document.getElementById('submit');


//date constructor
// create a date instances using new Date()
const today = new Date();

const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',

}

$today.textContent = today.toLocaleDateString('en-CA', { options });

$form.addEventListener('submit', function (e) {
    e.preventDefault();
    //get form values
    const title = $title.value

    //get the date and time
    const date = new Date($datetime.value);

    // display title and date 
    $saved.textContent = `${title} : ${date.toLocaleDateString('en-CA', options)}`;

    // create a data object
    // store datetime as timestamp
    const data = {
        form: form,
        title: title,
        timestamp: date.getTime()

    }

    // store form data and date in local storage
    localStorage.setItem('savedDate', JSON.stringify(data));

    // The form should pre-filled with data from local storage when the page first loads.
    // get the data from local storage
    const savedDate = localStorage.getItem('savedDate');
    // parse the data
    const parsedDate = JSON.parse(savedDate);
    // display the data
    $saved.textContent = `${parsedDate.form} : ${parsedDate.title} : ${parsedDate.timestamp}`;








})

const ls = localStorage.getItem('savedDate');

// if no save dates, ls equals undefined

if (ls) {
    const data = JSON.parse(ls);
    const title = data.title;
    const datetime = new Date(data.timestamp);

    $saved.textContent = `${data.form} : ${datetime.toLocaleDateString('en-CA', options)}`;
}


