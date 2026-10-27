document.getElementById("vacation-form").onsubmit = () => {
    let isValid = true;

    let destination = document.getElementById("destination").value;
    if (destination === "none") {
        document.getElementById("err-destination").style.visibility = "visible";
        isValid = false;
    }
    
    let depDate = document.getElementById("dep-date").value;
    if (depDate === "") {
        document.getElementById("err-dep-date").style.visibility = "visible";
        isValid = false;
    }


    let travelers = document.getElementById("travelers").value.trim();
    if (travelers < 1) {
        document.getElementById("err-travelers").style.visibility = "visible";
        isValid = false;
    }


    return isValid;

}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}