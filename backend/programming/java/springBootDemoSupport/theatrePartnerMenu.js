window.addEventListener('DOMContentLoaded', init, false);

function init() {
// Create the new node to insert
const newNode = document.createElement("span");
newNode.innerHTML = "TODO: from theatrePartnerMenu.js"

// Get a reference to the parent node
const parentNode = document.body;

let firstElementOfBody = parentNode.firstElementChild;
parentNode.insertBefore(newNode, firstElementOfBody);
}
