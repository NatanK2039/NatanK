document.addEventListener("DOMContentLoaded", function() {
// Toggle the dropdown menu on mobile
function toggleDropdown() {
  var dropdownContent = document.querySelector('#ProfessionalBackgroundLinks');
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

// Attach event listener to the dropdown button
var dropdownButton = document.querySelector('#ProfessionalBackgroundButton');
dropdownButton.addEventListener('click', toggleDropdown);


});

