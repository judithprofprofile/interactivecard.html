const CardNumber = document.getElementById("number");
const numberInp = document.getElementById("card-number");

const CardName = document.getElementById("name");
const nameInp = document.getElementById("card-name");

const CardMonth = document.getElementById("month");
const monthInp = document.getElementById("card-month");

const CardYear = document.getElementById("year");
const yearInp = document.getElementById("card-year");

const CardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card-cvc");

const submitBtn = document.querySelector(".submit-btn");

const completed = document.querySelector(".thank");
const form = document.querySelector(".form");
const rightSection = document.querySelector(".right-section");
const thankBtn = document.querySelector(".thankBtn");




console.log(rightSection);


function setCardNumber(e) {
    CardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
    CardName.innerText = e.target.value;
}
function setCardMonth(e) {
    CardMonth.innerText = e.target.value;
}

function setCardYear(e) {
    CardYear.innerText = e.target.value;
}

function setCardCvc(e) {
    CardCvc.innerText = e.target.value;
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$&");
}


//function to handle the button click that submits the form..(reveal the an error msg on any feilds left empty, or if the card number has less than 16 digits.. 2) check if the required feilds are filled with the appropraite data..ifall the reuirements are met, the thank you button should pop up..

function handleSumbit(e) {
    e.preventDefault();
    if (!nameInp.value) {
        nameInp.classList.add("error");
        nameInp.parentElement.classList.add("error-message");
    } else {
        nameInp.classList.remove("error");
        nameInp.parentElement.classList.remove("error-message");
    }

    if (!numberInp.value) {
        numberInp.classList.add("error");
        numberInp.parentElement.classList.add("error-message");
    } else {
        numberInp.classList.remove("error");
        numberInp.parentElement.classList.remove("error-message");
    }

    if (!monthInp.value) {
        monthInp.classList.add("error");
        monthInp.parentElement.classList.add("error-message");
    } else {
        monthInp.classList.remove("error");
        monthInp.parentElement.classList.remove("error-message");

    }

    if (!yearInp.value) {
        yearInp.classList.add("error");
        yearInp.parentElement.classList.add("error-message");
    } else {
        yearInp.classList.remove("error");
        yearInp.parentElement.classList.remove("error-message");
    }

    if (!cvcInp.value) {
        cvcInp.classList.add("error");
        cvcInp.parentElement.classList.add("error-message");
    } else {
        cvcInp.classList.remove("error");
        cvcInp.parentElement.classList.remove("error-message");
    }

    if (nameInp.value && numberInp.value && monthInp.value && yearInp.value && cvcInp.value) {
        completed.classList.remove("hidden");
        form.classList.add("hidden");
        rightSection.classList.add("hidden");
        console.log(completed, rightSection);

    }


};

function handleComplete() {
    completed.classList.add("hidden");
    rightSection.classList.remove("hidden");
    console.log("thankBtn");

}




numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSumbit);
thankBtn.addEventListener("click", handleComplete);



