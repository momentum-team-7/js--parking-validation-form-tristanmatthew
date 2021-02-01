// console.log('Add validation!');
const form = document.querySelector('#parking-form')
// let parkingDate = document.querySelector ("start-date");
// let totalDays = document.querySelector ("#days");
// let submitButton = document.querySelector("#submit-button");
// let total = document.querySelector ("#total");
let formIsValid
let price = 5
let fullPrice

window.addEventListener('submit', event => {
    event.preventDefault()
})

form.addEventListener('submit', event => {
    event.preventDefault()
    formIsValid = true

    if (formIsValid) {
        displayTotal()
    }
})

const displayTotal = () => {
    const total = totalPrice ()
    const totalDiv = document.querySelector('#total')
    totalDiv.classList.add('cost')
    totalDiv.innerHTML = `<p>Your total cost is $${total}</p>`
}
function validate(event) { 
    formIsValid = true
    confirmValidForm()
}


function confirmValidForm() {
    // if (formIsValid && form.checkValidity()){
        if (true) {
        const validMsgEl = document.querySelector('#total')
        validMsgEl.innerText = totalPrice()
    }
}

function totalPrice () {
    const totalDays = parseInt(document.querySelector('#days').value, 10);
    console.log("total days is" , totalDays)
    let startDate = document.querySelector('#start-date').value;
    console.log('testing the start day array', startDate)
    let days = []
    let day = new Date(startDate)

    for (let i = 1; i <= totalDays; i++) {
        day = new Date(day.setDate(day.getDate() +1))
        days.push(day.getDay())
    }
    // let startDay = startDate.getDay();
    // console.log("day of the week", startDay);
    // console.log("start date", typeof startDate, startDate);
    // getParkingDate(startDate, totalDays);
    // let fullPrice = totalDays * price;
    // return `Your total cost is $ ${fullPrice}`
    return days
    .map(day => (day > 0 && day < 6 ? 5:7))
    .reduce((fullprice, cost) => {
        return (fullprice += cost)
        }, 0)
}


// function getTotal(dayArray) {
//     let totalCost = 0;

//     for(let i=0; i < dayArray.length; i++) {
//         if (dayArray[i] === 0 || dayArray [i] === 6) {
//             totalCost += 7;
//         }
//         else {
//             totalCost += 5;
//         }
//         }
//         return totalCost;
// }

function getParkingDate(startDate, numOfDays) {
    let copyEndDate = new Date(Number(startDate))
    console.log("number of days", numOfDays)
    let dayArray = []
    dayArray.push(startDate.getDay())
        for (let i = 1; i <= numOfDays; i++) {
            endDate = copyEndDate.setDate(startDate.getDate() + i)
            endDay = new Date(endDate).getDay()
            dayArray.push(endDay)
            console.log("the end days number code value is: ", endDay, i)
        }

    console.log("day array", dayArray)

}





// luhn CC Check //

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
}``
