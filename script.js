console.log('Add validation!');

// assign variable names referencing the html
let form = document.querySelector ("#parking-form");
let name = document.querySelector ("name");
let carYearNum = document.querySelector ("car-year");
let carMake = document.querySelector ("car-make");
let carModel = document.querySelector ("car-model");
let parkingDate = document.querySelector ("start-date");
let totalDays = document.querySelector ("#days");
let cc = document.querySelector ("credit-card");
let cvv = document.querySelector ("cvv");
let exp = document.querySelector ("expiration");
let submit = document.querySelector("#submit-button");
let total = document.querySelector ("#total");
let formIsValid


// add event listener to the submit button to prevent default behaviour

window.addEventListener('submit', e=> {
    error.preventDefault();

    checkformIsValid();
});

document.addEventListener('click', validate);
form.addEventListener('click', validate);


function checkValidation () {
    let todaysDate = new Date();
    let day = todaysDate.getDate();
    let month = todaysDate.getMonth() + 1;
    let year = todaysDate.getFullYear();

    if (day < 10) {
        day ="0" + totalDays;
    }
    else if (month < 10) {
        month = "0" + month;
    }

    let maxDate = year + "/" + month + "/" + totalDays;

    document.querySelector("#start-date").setAttribute("min", maxDate);
}

// showing user the total cost of parking, when make reservation is clicked

form.addEventListener('click', e=> {
    removeTotal();
    formIsValid = true

    checkCc();
    checkExp();
    validateCarYear();

    displayTotalCost();
})

function formIsInvalid() {
    formIsValid = false;
}

// total cost $5

function finalTotal(){
    let price = 5
    let totalCost = totalDays*price
    return '$$(totalCost) is your total'
    console.log (total)
}

function checkCc () {
    let cardNum = cc.value;
    if (!validateCreditCard(cardNum)) {
        formIsValid = false;
        cc.setCustomValidity('Card number is invalid');
    }
    else {
        cc.setCustomValidity('');
    }
}

function checkExp () {
    let date = new Date ();
    let currentYear = date.getFullYear()%100;
    let currentMonth = date.toLocaleDateString().substr(0,1);
    var regex = new RegExp("^[0-1] [0-9]/[0-9] [0-9]");
    
    if (!regex.test(exp.value)) {
        formIsValid = false;
        exp.setCustomValidity('Expiration not valid') 
    }
    else if (regex.test(exp.value)) {
        let yearDigits = parseInt(exp.value.substr(exp.value.length -2));
        let month = parseInt(exp.value);
        if ((month<1||month>12) || (yearDigits <currentYear) || (yearDigits === currentYear && month < currentMonth)) {
            formIsValid = false;
            exp.setCustomValidity('Month and/or Year are not valid');
        }
        else {
            exp.setCustomValidity("");
        }
    // else {
    //     exp.setCustomValidity("");
    }
}
// }



// cost is $5 weekdays, $7 weekends
function getTotalCost(arr)
    let total = 0;

    for (let i= 0; i < arr.length; i++) {
        if (arr[i] === 0 || arr[i] === 6) {
            total += 7;
        }
        else {
            total += 5;
        }
        return total;
     }
    
// days converted to array
function arrCount(parkingDate, numOfDays) {
    let array = []
    for (let i = 0; i < days; i++) {
        array.push(start-date + i);
    }
}

function getDayOfWeek (parkingDate) {
    let date = startDate.replace(/-/g, '\/');
    let d = new Date(date).getDay();
    return d;
}


function displayTotalCost() {
    if (formIsValid && form.checkValidity()) {
        let parkingDate = document.querySelector('#start-date').value;
        let totalDays = parseInt(document.querySelector('#days').value);
        let total = getTotalCost(arrCount(getDayOfWeek(parkingDate), totalDays));

        total.textcontent="Total Cost is $${total}";
    }

}

function removeTotal() {
    if (total.textContent !== "") {
        total.textContent = "";
    }
}





// car year cannot be in the future - validation. next years car models usually released in the late-summer/early autumn of the previous year, validation is reflected here)
function validateCarYear () {
    let carYear = parseInt(carYearNum.value);
    let currentYear = new Date().getFullYear() + 1;
     
    if (currentYear < carYear) {
         formIsValid = false;
         carYearNum.setCustomValidity('Car year may not exceed ${currentYear}.')
    }
    else {
        carYearNumn.setCustomValidity('');
    }
 }

// show user the total cost of parking when 'make reservation is clicked'


// copied code for CC-num validation
function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

function dateFormat (date) {
    let startDate = document.querySelector('#start-date').value;
    let endDate = startDate.replace(/-/g, '\/');
    console.log('actualDate');
}

function totalExpense () {
    const totalDays = document.querySelector('#days').value;
    let startDate = document.querySelector('#start-date').valueAsDate;
    let startDay = startDate.getDay();
    console.log(startDay)
    console.log("start date", typeof startDate, startDate)
    getParkingDate(startDate, totalDays)
    let fullPrice = totalDays*price
    return 'Your total cost is $${fullPrice}'
}

function getParkingDates(startDate, numOfDays) {
    let copyEndDate = new Date(Number(startDate))
    console.log("number of days", numOfDays)
    endDate = copyEndDate.setDate(startDate.getDate() + numOfDays)
    endDay = new Date(endDate).getDay()
    console.log("the end days number code value is: ", endDay)

    console.log("end date", endDate)

}

