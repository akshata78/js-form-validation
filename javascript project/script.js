function validateForm() {
    let valid = true;

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    clearAllErrors();

    if (fullName.length < 5) {
        displayError("nameError", "Name must be at least 5 characters.");
        valid = false;
    }

    if (!email.includes("@")) {
        displayError("emailError", "Enter a valid email.");
        valid = false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        displayError("phoneError", "Enter a valid 10-digit phone number.");
        valid = false;
    }

    if (password === "password" || password.length < 8) {
        displayError("passwordError", "Password is too weak.");
        valid = false;
    }

    if (confirmPassword !== password) {
        displayError("confirmPasswordError", "Passwords do not match.");
        valid = false;
    }

    if (valid) {
        alert("Form successfully submitted!");
    }
    return valid;
}

function displayError(id, message) {
    document.getElementById(id).innerText = message;
}

function clearMessage(id) {
    document.getElementById(id).innerText = "";
}

function clearAllErrors() {
    const errorFields = ["nameError", "emailError", "phoneError", "passwordError", "confirmPasswordError"];
    errorFields.forEach((id) => clearMessage(id));
}
