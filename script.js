// nomor 6
function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipcode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    const formData = {
        name: name,
        email: email,
        city: city,
        zipCode: zipcode,
        status: status,
    };

    return formData;
}

// nomor 7
function isNumber(str) {
    for (let i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i]))) {
            return false;
        }
    }
    return true;
}

// nomor 8
function checkboxIsChecked() {
    var checkbox = document.getElementById("status");
    if (checkbox.checked) {
        return true;
    } else {
        return false;
    }
}

// nomor 9
function validateFormData(formData) {
    if (!formData) {
        return false;
    }

    if (isNaN(formData.zipCode)) {
        return false;
    }

    const statusCheckbox = document.querySelector("#status");
    if (!statusCheckbox.checked) {
        return false;
    }

    return true;
}

// nomor 10
const form = document.getElementById("form");

function submit(event) {
    event.preventDefault();
    const formData = handleGetFormData();
    const isValid = validateFormData(formData);
    console.log(formData);

    const warningDiv = document.getElementById("warning");

    if (!isValid) {
        warningDiv.innerText = "Periksa form anda sekali lagi";
    } else {
        warningDiv.innerText = "";
    }
}

form.addEventListener("submit", submit);