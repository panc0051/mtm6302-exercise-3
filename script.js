//retrieve the HTML  elements
const $today = document.getElementById('today');
const $saved = document.getElementById('saved');
const $formB = document.getElementById('formB');
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
$formB.addEventListener('submit', function (e) {
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
const $list = $('#list')
const $items =$('.list-group-item')
const $formAdd = $('#formAdd')
const $item = $('#item')

//create data array
const items = [
    'milk',
    'bread',
    'eggs',
    'cheese',
    'butter',
    'sugar',
    'tea',
    'coffee',
]
//create function to build list

function buildList() {
 const html = []

 for (const item of items) {
     html.push(`<li class="list-group-item">${item}</li>`)
 }
 $list.html(html.join(''))


}

//build list
buildList()

//Adding an event handler to the form
$formAdd.on('submit', function (e) {
    //prevent the default action
    e.preventDefault()

    //add new item to items array
    //new items comes from $item textbox
    items.push($item.val())

    //reset $item textbox to empty
    $item.val('')

    //build list
    buildList()

})



// use event delegation to set event to existing elements and future elements
$list.on('click', 'li', function (e) {
    $(this).toggleClass('text-muted text-decoration-line-through')
})

//retrieve the HTML elements
const $body = document.body
const $title1 = document.getElementById('title1')
const $form1 = document.getElementById('form1')
const $bgcolor = document.getElementById('bgcolor')
const $invert = document.getElementById('invert')

function setBackground() {
    //to check if a checkbox is checked
    //.checked = true or false
    //if inverted is checked
    if ($invert.checked) {
        $body.style.color =$bgcolor.value
        $body.style.backgroundColor = 'rgb(33, 37, 41)'

    } else {
        //if invert checkbox is not checked
        //set the baground of the body
    $body.style.backgroundColor = $bgcolor.value
    $body.style.color = 'rgb(33, 37, 41)'
    }


}

//listen for changes in the bgcolor
$bgcolor.addEventListener('change', setBackground)

//Listen for change to the invert checkbox
$invert.addEventListener('change', setBackground)


//form event listener
//prevent the default action
$form1.addEventListener('submit', function (e) {
e.preventDefault()

})