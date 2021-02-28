let btnShowPass = document.getElementsByClassName("show-pass");
let inp = document.getElementsByClassName("pass-inp");
let allInp = document.getElementsByClassName("input");
let tabLinks = document.getElementsByClassName("tab-link");
let error = document.getElementsByClassName("error");
let message = document.getElementsByClassName("mess");
let Users = [];
let form = document.forms.login;
let regForm = document.forms.registration;
let repPas = regForm.elements.reppassword;

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
    let repPas = regForm.elements.reppassword;
    if (el.validity.value) {
        el.classList.remove("input-error");
    }
    if (el.validity.valueMissing) {
        el.classList.add("input-error");
        el.setCustomValidity("Обязательное поле");
        mess.innerHTML = "oбязательное поле";
        mess.classList.add("mess");
    }
    if (el.validity.typeMismatch) {
        el.classList.add("input-error");
        el.setCustomValidity("Некорректный формат");
        mess.innerHTML = "некорректный формат";
        mess.classList.add("mess");
    }
    if (el.validity.patternMismatch && el.name === "phone") {
        el.classList.add("input-error");
        el.setCustomValidity("Некорректный номер");
        mess.innerHTML = "некорректный номер";
        mess.classList.add("mess");
    }
    if (el.name === "password" && el.value) {
        if (el.validity.patternMismatch) {
            el.classList.add("input-error");
            el.reportValidity();
            el.setCustomValidity("Пароль должен содержать не мение 8 символов, как минимум 1 цифру, 1 заглавную и 1 прописную букву");
        }
        if (!el.validity.patternMismatch) {
            el.reportValidity(true);
        }
    }
    if (repPas.value && p1 !== p2 && el.name === "reppassword") {
        repPas.reportValidity();
        repPas.classList.add("input-error");
        mess.innerHTML = "пароли не совпадают";
        mess.classList.add("mess");
    }
    if (repPas.value && p1 === p2 && el.name === "reppassword") {
        repPas.reportValidity(true);
        repPas.classList.remove("input-error");
        mess.classList.remove("mess");
    }
}

function setUser(email, phone, password, country) {
    return {
        email,
        phone,
        password,
        country,
    };
}

function Submit() { 
    if (regForm.checkValidity()) {
        alert('Valid !');
        let user = setUser(regForm.elements.email.value, regForm.elements.phone.value, regForm.elements.password.value, regForm.elements.country.value);
        console.log(user);
        regForm.reset();         
    } else {
        let messEr = document.getElementById("err-check");
        messEr.classList.add("error-show");
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
