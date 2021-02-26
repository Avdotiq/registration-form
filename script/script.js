let btnShowPass = document.getElementById("show-pass");
let inp = document.getElementsByClassName("pass-inp");
let allInp = document.getElementsByClassName("input");
let tabLinks = document.getElementsByClassName("tab-link");
let error = document.getElementsByClassName("error");
let form = document.forms.login;
let bol = true;

document.addEventListener( "DOMContentLoaded", function() {
    btnShowPass.addEventListener("click", ShowPassord);
    for (i=0; i<allInp.length; i++) {
        allInp[i].addEventListener("blur", isValidate);
    }
    for (i=0; i<allInp.length; i++) {
        allInp[i].addEventListener("focus", refreshFocus);
    }
    for (i=0; i<tabLinks.length; i++) {
        tabLinks[i].addEventListener("click", refresh);
    }
});

function ShowPassord() {
    if (bol) {
        btnShowPass.src = "img/unshow-pass.png";
        inp[0].type = "text";
        bol = false;
    } else {
        btnShowPass.src = "img/show-pass.png";
        inp[0].type = "password";
        bol = true;
    }
}

function isRequired() {
    el = event.currentTarget;
    let mess = el.nextElementSibling;
    if (!el.value) {
        el.classList.add("input-error");
        mess.innerHTML = "Обязательное поле";
        mess.classList.add("error-show");
    } else if (el.value) {
        el.classList.remove("input-error");
        mess.classList.remove("error-show");
    }
}

function refreshFocus() {
    el = event.currentTarget;
    el.classList.remove("input-error");
    mess = el.nextElementSibling;
    mess.classList.remove("error-show");
}

function refresh() {
    for (i=0; i<allInp.length; i++) {
        allInp[i].classList.remove("input-error");
    }
    for (i=0; i<error.length; i++) {
        error[i].classList.remove("error-show");
    }
}

function isValidate() {
    isRequired();
    el = event.currentTarget;
    if (el.value.noValidate) {
        console.log('noValid');
        messIncor[0].classList.add("error-show");      
    }

    el = event.currentTarget;
    if (!el.value) {
        console.log("no value");
        el.setCustomValidity("Обязательное поле");
    }
    if (!el.validity.valid) {
        console.log("yebeb");
        
    }
}

function Submit() {
    if (form.noValidate) {
        console.log(false);
        return false;
    } else {
        console.log(true);
        return true;
    }
}
