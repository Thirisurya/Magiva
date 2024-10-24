function validateForm() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const nameError = document.getElementById("name-error");

    const messageError = document.getElementById(
        "message-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
    const phoneError = document.getElementById(
        "phone-error"
    );


    nameError.textContent = "";
    messageError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent ="";


    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent =
            "Please enter your Message.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (phone=== "") {
        phoneError.textContent =
            "Please enter a phone number.";
        isValid = false;
    }
    return isValid;
}


