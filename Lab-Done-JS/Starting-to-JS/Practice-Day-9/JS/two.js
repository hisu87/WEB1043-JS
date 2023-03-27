function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var username = document.forms["myForm"]["username"].value;
    var code = document.forms["myForm"]["code"].value;

    if (name == "" || email == "" || password == "") {
        alert("Please fill out all required fields.");
        return false;
    }

    if (username.length < 6 || username.length > 12) {
        alert("Username must be between 6 and 12 characters.");
        return false;
    }

    if (isNaN(code)) {
        alert("Code must be a number.");
        return false;
    }
}
function clearField(field) {
    field.value = "";
}