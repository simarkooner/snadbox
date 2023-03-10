// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var formData = document.getElementById("contact-page");
var button = document.getElementById("submit-button");

function submitForm() {
    formData.style.fontSize = "24px";
    formData.innerHTML = "<p>Thank you for your message!</p>";
}

button.addEventListener("click", submitForm);