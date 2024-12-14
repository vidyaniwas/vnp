window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-153937526-1');

	// Function to calculate experience
		function calculateExperience() {
		    const startDate = new Date("2022-05-02"); // May 2, 2022.
		    const currentDate = new Date();
		
		    // Calculate the difference in time (in milliseconds)
		    const timeDifference = currentDate - startDate;
		
		    // Convert time difference to years
		    const experienceInYears = timeDifference / (1000 * 3600 * 24 * 365);
		
		    // Round the result to 1 decimal point
		    const roundedExperience = experienceInYears.toFixed(1);
		
		    // Display the experience in the HTML element.
		    document.getElementById("experience").innerText = roundedExperience;
		}
		// Call the function to calculate experience on page load
		window.onload = calculateExperience;


function validateForm() {
    let email = document.getElementById("contactEmail").value.trim();
    let message = document.getElementById("contactMessage").value.trim();
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
 
    let isValid = true;

    // Reset error messages
    emailError.textContent = "";
    messageError.textContent = "";

    // Email validation
    if (!email) {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    // Message validation
    if (!message) {
        messageError.textContent = "Message is required.";
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters long.";
        isValid = false;
    }
    return isValid;
}