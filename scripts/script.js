document.getElementById('completeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const zip = document.getElementById('zip').value;
    const country = document.getElementById('country').value;
    const password = document.getElementById('password').value;

    // Perform your validation logic here
    // For demonstration, let's just log the values
    console.log('Name:', name, 'Email:', email, 'ZIP:', zip, 'Country:', country, 'Password:', password);
    
    alert('Form submitted. Check console for details.');
});

// Activity: Password Validation
document.getElementById('passwordValidationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('pv-password').value;
    const regex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

    if (!regex.test(password)) {
        alert('Password must contain at least one special character, one uppercase letter, and one number.');
        return false;
    }

    alert('Password validation passed.');
});

// Form Activity with Number Input
document.getElementById('numberInputForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputValue = document.getElementById('inputField').value;

    if (inputValue >= 1 && inputValue <= 100) {
        document.getElementById('result').innerHTML = `You entered a valid number: ${inputValue}`;
    } else {
        document.getElementById('result').innerHTML = "Please enter a number between 1 and 100.";
    }
});

// preventDefault: Example
const myInput = document.getElementById("myInput");

myInput.addEventListener("keydown", (e) => {
    const char = e.key;
    const isValid = char >= "a" && char <= "z";

    if (!isValid && char.length === 1) {
        e.preventDefault();
        displayWarning(`Please use lowercase letters only. Entered: ${char}`);
    }
});

// Function to display warning
let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
    warningBox.innerHTML = msg;

    if (document.body.contains(warningBox)) {
        clearTimeout(warningTimeout);
    } else {
        myInput.parentNode.insertBefore(warningBox, myInput.nextSibling);
    }

    warningTimeout = setTimeout(() => {
        if (warningBox.parentNode) {
            warningBox.parentNode.removeChild(warningBox);
        }
        warningTimeout = -1;
    }, 2000);
}