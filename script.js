//retrieve the HTML  elements
const $today = document.getElementById('today');
const $saved = document.getElementById('saved');
const $formB = document.getElementById('formB');
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



//insert today into the $today
$today.textContent = today.toLocaleString('en-CA', options);
$formB.addEventListener('submit', function (e) {
    e.preventDefault()

    //get the title
    const title = $title.value

    //get the datetime
    //create a date instance using new
    const datetime = new Date($datetime.value);

    $saved.textContent = `Application Sent 
    successfully.${title}.your profile has been sent to Office on ${datetime.toLocaleString('en-CA', options)}`;


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

//const ls = localStorage.getItem('savedDate')
//if no savedDate, is equal to null

// if (ls) {
//     //convert string to object
//     const data = JSON.parse(ls)

//     const title = data.title
//     const datetime = new Date(data.timestamp)
//     //display the title date
//     $saved.textContent = `${title}: ${datetime.toLocaleString('en-CA', options)}`;
// }

// Lecture : 16 Demo

// select the elements
const $list = $('#list')
const $items =$('.list-group-item')
const $formAdd = $('#formAdd')
const $item = $('#item')

//create data array
const items = [
    'C++',
    'Java',
    'Python',
    'JavaScript',
    
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
const $form = document.getElementById('form')
const $bgcolor = document.getElementById('bgcolor')
const $invert = document.getElementById('invert')
const $font = document.getElementById('font')
const $placeholder = document.getElementById('placeholder')

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


//Setting the font family
function setFontFamily() {
    $body.style.fontFamily = $font.value
}

//listen for change to font
$font.addEventListener('change', setFontFamily)

//listen for change to placeholder
function setTitle(){
    if($placeholder.value){
        $title.textContent = $placeholder.value
    } else {
        $title.textContent = 'Theme Generator'
    }

}

//Setting the placeholder
$placeholder.addEventListener('input', setTitle)

//form event listener
//prevent the default action
$form.addEventListener('submit', function (e) {
e.preventDefault()

const settings = {
    bgcolor: $bgcolor.value,
    invert: $invert.checked,
    font: $font.value,
    placeholder: $placeholder.value
}
//store settings in local storage
localStorage.setItem('settings',
 JSON.stringify(settings))

})

//get setting from local storage
const ls = localStorage.getItem('settings')

// if there is no data in local storage
//it will return null
//will be true if there is data in local storage

if(ls){
    const settings = JSON.parse(ls)
    $bgcolor.value = settings.bgcolor
    $invert.checked = settings.invert
    $font.value = settings.font
    $placeholder.value = settings.placeholder

    
    setBackground()
    setFontFamily()
    setTitle()
}
// Reinvent from here!
//retrieve the HTML elements
$card = document.getElementById('card')
$jobForm = document.getElementById('jobForm')

//stop card from refreshing
$card.addEventListener('submit', function (e) {
    e.preventDefault()

})


//Clicking on the "save" button will save the current form data to local storage.
$('#save').on('click', function () {
    const settings = {
        bgcolor: $bgcolor.value,
        invert: $invert.checked,
        font: $font.value,
        placeholder: $placeholder.value
    }
    //store settings in local storage
    localStorage.setItem('settings',
     JSON.stringify(settings))
})

//A "success" message is displayed after the form is submitted.
function showMessage() {
    $('#message').text('Your profile has been saved')
    $('#message').show()
    setTimeout(function () {
        $('#message').hide()
    }, 1000)
}
showMessage()