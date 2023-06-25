document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("ProfessionalBackgroundButton");
    var dropdown = document.getElementById("DropDownDiv");
    var options = dropdown.getElementsByTagName("option");
  
    // Function to toggle the visibility of the dropdown
    function toggleDropdown() {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }
  
    // Event listener to trigger the toggleDropdown function when the button is clicked
    button.addEventListener("click", toggleDropdown);
  
    // Event listener for the options in the dropdown
    for (var i = 0; i < options.length; i++) {
      options[i].addEventListener("click", function() {
        var selectedValue = this.value;
        // Redirect the user to the appropriate page based on the selected option
        if (selectedValue === "SkillsSummary") {
          window.location.href = "./SummaryOfSkills.html"; // Replace with the desired URL
        } else if (selectedValue === "CV") {
          window.location.href = "./CV.html"; // Replace with the desired URL
        }
      });
    }
  });
  