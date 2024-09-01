function validateSignUpForm() {
    const password = document.getElementById('password').value;
    const agree = document.getElementById('agree').checked;
    const collegeID = document.getElementById('collegeID').files.length;

    // Check if the checkbox is checked
    if (!agree) {
        alert("You must agree to the information provided.");
        return false;
    }

    // Check if the college ID photo is uploaded
    if (collegeID === 0) {
        alert("Please upload your college ID photo.");
        return false;
    }

    // Hide sign-up form and show club form
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('clubForm').style.display = 'block';

    return false; // Prevent form submission
}

function validateClubForm() {
    // Collect form data
    const checkboxes = document.querySelectorAll('#clubForm input[type="checkbox"]');
    let selectedClubs = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedClubs.push(checkbox.value);
        }
    });

    if (selectedClubs.length === 0) {
        alert("Please select at least one club.");
        return false;
    }

    // Create confirmation message
    const message = `You have successfully joined the following clubs: ${selectedClubs.join(', ')}. Thank you!`;
    
    // Hide the club form
    document.getElementById('clubForm').style.display = 'none';
    
    // Show confirmation message
    const submittedDataDiv = document.getElementById('submittedData');
    submittedDataDiv.innerHTML = `<h2 class="form-title">Confirmation</h2><p>${message}</p>`;
    submittedDataDiv.style.display = 'block';

    return false; // Prevent form submission
}
