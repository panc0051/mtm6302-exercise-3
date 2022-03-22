const $today = document.getElementById('today');
const $saved = document.getElementById('saved');
const $form = document.getElementById('form');
const $title = document.getElementById('title');
const $datetime = document.getElementById('datetime');
const $userName = document.getElementById('userName');

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



//insert today into the $today
$today.textContent = today.toLocaleString('en-CA', options);
$form.addEventListener('submit', function (e) {
    e.preventDefault()

    //get the title
    const title = $title.value

    //get the datetime
    //create a date instance using new
    const datetime = new Date($datetime.value);

    $saved.textContent = `${title}: ${datetime.toLocaleString('en-CA', options)}`;


    //create a data object
    //store datetime as timestamp
    const data = {
        title: title,
        timestamp: datetime.getTime()
    }



    //store time in local storage
    localStorage.setItem('savedDate', JSON.stringify(data))
})
//geting savedDate data from local storage

const ls = localStorage.getItem('savedDate')
//if no savedDate, is equal to null

if (ls) {
    //convert string to object
    const data = JSON.parse(ls)

    const title = data.title
    const datetime = new Date(data.timestamp)
    //display the title date
    $saved.textContent = `${title}: ${datetime.toLocaleString('en-CA', options)}`;
}

// Lecture : 16 Demo

// select the elements
const $list = $('#list');
const $items = $('.list-group-item')


//Manipulating the DOM
//Also can add properties to the elements
$list.addClass('p-5 bg-light')

$items.css({
    'color': 'red',
    'font-weight': 'bold'
})

//create a data array
const items = [
    'milk',
    'bread',
    'eggs',
    'cheese',
    'butter'
]
//create function to the build list
function buildList(){
    const html = []

    for(const item of items) {
        html.push(`<li class="list-group-item">${item}</li>
        `)
    }
}