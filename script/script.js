let btnShowPass = document.getElementsByClassName("show-pass");
let inp = document.getElementsByClassName("pass-inp");
let allInp = document.getElementsByClassName("input");
let tabLinks = document.getElementsByClassName("tab-link");
let error = document.getElementsByClassName("error");
let message = document.getElementsByClassName("mess");
let form = document.forms.login;
let regForm = document.forms.registration;

document.addEventListener( "DOMContentLoaded", function() {
    for (i=0; i<btnShowPass.length; i++) {
        btnShowPass[i].addEventListener("click", ShowPassord);
    }
    for (i=0; i<allInp.length; i++) {
        allInp[i].addEventListener("blur", isValidate);
    }
    for (i=0; i<allInp.length; i++) {
        allInp[i].addEventListener("focus", refreshFocus);
    }
    for (i=0; i<tabLinks.length; i++) {
        tabLinks[i].addEventListener("click", refresh);
    }
    regForm.country.addEventListener("blur", isValidate);
    regForm.country.addEventListener("focus", refreshFocus);
});

function ShowPassord() {
    el = event.currentTarget;
    inp = el.nextElementSibling;
    if (inp.type === "password") {
        el.src = "img/unshow-pass.png";
        inp.type = "text";
    } else {
        el.src = "img/show-pass.png";
        inp.type = "password";
    }
}

function refreshFocus() {
    el = event.currentTarget;
    el.classList.remove("input-error");
    el.setCustomValidity("");
    mess = el.nextElementSibling;
    mess.classList.remove("mess");
}

function refresh() {
    for (i=0; i<allInp.length; i++) {
        allInp[i].classList.remove("input-error");
    }
    for (i=0; i<error.length; i++) {
        error[i].classList.remove("error-show");
    }
    for (i=0; i<message.length; i++) {
        message[i].classList.remove("mess");
    }
    form.reset();
    regForm.reset();
}

function isValidate() {
    el = event.currentTarget;
    mess = el.nextElementSibling;
    let p1 = regForm.elements.password.value;
    let p2 = regForm.elements.reppassword.value;
    if (el.validity.value) {
        el.classList.remove("input-error");
    }
    if (el.validity.valueMissing) {
        console.log("no value");
        el.classList.add("input-error");
        el.setCustomValidity("Обязательное поле");
        mess.innerHTML = "oбязательное поле";
        mess.classList.add("mess");
    }
    if (el.validity.typeMismatch) {
        console.log("miss match");
        el.classList.add("input-error");
        el.setCustomValidity("Некорректный формат");
        mess.innerHTML = "некорректный формат";
        mess.classList.add("mess");
    }
    if (el.validity.patternMismatch) {
        el.classList.add("input-error");
        el.setCustomValidity("Некорректный номер");
        mess.innerHTML = "некорректный номер";
        mess.classList.add("mess");
    }
    if (el.validity.tooShort) {
        el.classList.add("input-error");
        el.setCustomValidity("Не меньше 8 символов");
        mess.innerHTML = "не меньше 8 символов";
        mess.classList.add("mess");
    }
    if (p2 && p1 !== p2 && p2 === "") {
        let messEr = regForm.elements.reppassword;
        messEr.classList.add("input-error");
        messEr.setCustomValidity("Пароли не совпадают");
        mess.innerHTML = "пароли не совпадают";
        mess.classList.add("mess");
    }
}

function ischeckbox() {
    let messEr = document.getElementById("err-check");
    messEr.classList.add("error-show");
}

function Submit() { 
    if (regForm.checkValidity()) {
            alert('Valid !');
            return true;
    } else {
        ischeckbox();
        return false;
    }
}

function Login() {
    if (form.checkValidity()) {
        alert('Valid !');
        return true;
    }  else {
        alert('Invalid !')
        return false;
    }
}
