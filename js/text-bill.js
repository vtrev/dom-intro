// a reference to the textbox where the bill type is to be entered
var inputString1 = document.querySelector('.billTypeText');
//get a reference to the add button
var textTotalAddBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var toatlTextBill = 0;
var textTotal = document.querySelector('.totalOne');

//add an event listener for when the add button is pressed
var callsTotal = 0;
var smsTotal = 0;

function textBillTotal() {
    // get the value entered in the billType textfield
    var billTypeEntered = inputString1.value.trim();
    // update the correct total

    if (billTypeEntered === "call") {
        callsTotal += 2.75
    } else if (billTypeEntered === "sms") {
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    document.querySelector('.callTotalOne').innerHTML = callsTotal.toFixed(2);
    document.querySelector('.smsTotalOne').innerHTML = smsTotal.toFixed(2);
    var totalTextBill = callsTotal + smsTotal;

    textTotal.innerHTML = totalTextBill.toFixed(2);
    //applying different colors for different values
    if ((totalTextBill > 29.99) && (totalTextBill <= 49.99)) {
        if (document.querySelector('.totalOne').classList.contains('danger')) {
            document.querySelector('.totalOne').classList.remove('danger');
        }

        document.querySelector('.totalOne').classList.add('warning');

    } else if (totalTextBill > 49.99) {
        if (document.querySelector('.totalOne').classList.contains('warning')) {
            document.querySelector('.totalOne').classList.remove('warning');
        }

        document.querySelector('.totalOne').classList.add('danger');

    }

}

textTotalAddBtn.addEventListener('click', textBillTotal);
