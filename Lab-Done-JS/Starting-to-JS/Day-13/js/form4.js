function message(m) {
    document.getElementById("welcome").innerHTML = m;
}
function logEvent() {
    let p = Event.target;
    if (p.name = "firstname") {
        message("First name changed to " + p.value);
        message("Last name changed to " + p.value);
    }
}

function sendInfo() {
    let p = Event.target.parentElement;
    message("Welcome" + p.firstname.value + " " + p.lastname.value);
}


