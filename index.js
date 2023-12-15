var heading = document.getElementById('heading');
heading.innerHTML = 'Welcome to the Dynamic Web Application!';

alert('Welcome to the Dynamic Web Application!');
// Event-Driven Programming and DOM Events
language-javascript* 
// Add an event listener to a button
var button = document.getElementById('myButton');
button.addEventListener('click', function() {
  // Code to execute when the button is clicked
});

// Trigger an event manually
var event = new Event('customEvent');
button.dispatchEvent(event);

// Remove an event listener
button.removeEventListener('click', myFunction);

// Prevent default behavior of an event
event.preventDefault();

// Stop event propagation
event.stopPropagation();



// *Browser Object Model (BOM)
// language-javascript
// *


// Get the current URL
var currentURL = window.location.href;

// Open a new window
var newWindow = window.open('https://www.example.com', '_blank');

// Close the current window
window.close();

// Get the browser's width and height
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// Redirect to a new URL
window.location.href = 'https://www.example.com';
// Cache an element using getElementById
const element = document.getElementById('myElement');
// Cache elements using querySelector or query selector all
const elements = document.querySelectorAll('.myClass');
// Navigate between elements using parent-child-sibling relationships:
// const parentElement = element.parentNode;
const firstChildElement = parentElement.firstChild;
const nextSiblingElement = element.nextElementSibling;
// Iterate over a collection of elements:
const Elements = document.querySelectorAll('.myClass');
elements.forEach(element => {
  // Do something with each element
})
// Create a new element using createElement:;
const newElement=document.createElement('div')
// Add new elements to the DOM using appendChild or prepend

const parentElement = document.getElementById('parentElement');
parentElement.appendChild(newElement);
// Create templated content using DocumentFragment or cloneNode

const template = document.getElementById('template');
const clone = template.content.cloneNode(true);
// Modify the style or CSS classes of an element in response to user interaction:

// const element = document.getElementById('myElement');
element.style.color = 'red';
element.classList.add('highlight');
// Modify an attribute of an element in response to user interaction


const element = document.getElementById('myElement');
element.setAttribute('data-value', 'new value');
// Register event listeners and create event handler functions:

const button = document.getElementById('myButton');
button.addEventListener('click', handleClick);

function handleClick(event) {
  // Handle the click event
}
// BOM Interaction

// Access the window object:


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
// Manipulate the browser history:
window.history.pushState({}, '', '/new-url');
// Open a new browser window or tab:
 window.open('https://www.example.com', '_blank');
//  Display a confirmation dialog
const result = window.confirm('Are you sure?');
// Set a timeout or interval:

setTimeout(() => {
  // Code to execute after a delay
}, 1000);

setInterval(() => {
  // Code to execute repeatedly at a specified interval
}, 5000);

 




