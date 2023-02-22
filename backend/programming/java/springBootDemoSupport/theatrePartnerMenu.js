window.addEventListener('DOMContentLoaded', init, false);

function init() {
// Create the new node to insert
const newNode = document.createElement("span");
newNode.innerHTML = /*html*/`
<a href="/createMovieSchedule.html">New Movie Schedule</a> 
<a href="/listMovieSchedules.html">Scheduled Movies</a>
<a href="/createMovie.html">New Movie</a> 
`

// Get a reference to the parent node
const parentNode = document.body;

let firstElementOfBody = parentNode.firstElementChild;
parentNode.insertBefore(newNode, firstElementOfBody);
}
