//a reference to the add button
var radioAddBtn = document.querySelector('.radioBillAddBtn');

// a reference to the radioBill total element
var radioTotal = document.querySelector('.totalTwo');

//variables that will keep track of the totals
var totalRadioBill = 0;
var callsTotalOne = 0;
var smsTotalOne = 0;


//the totalBill function to execute on button click

function radioBillTotal() {
    // reference to the checked radio button

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");



    // conditionally update the totals that are displayed on the screen.

    if (checkedRadioBtn.value === "call") {
        callsTotalOne += 2.75
    } else if (checkedRadioBtn.value === "sms") {
        smsTotalOne += 0.75;

    }

    document.querySelector('.callTotalTwo').innerHTML = callsTotalOne.toFixed(2);
    document.querySelector('.smsTotalTwo').innerHTML = smsTotalOne.toFixed(2);
    // sum up the totals and update the total displayed on the screen
    totalRadioBill = callsTotalOne + smsTotalOne;

    radioTotal.innerHTML = totalRadioBill.toFixed(2);
    //conditionally applying different colors for different values
    if ((totalRadioBill > 29.99) && (totalRadioBill <= 49.99)) {
        if (document.querySelector('.totalTwo').classList.contains('danger')) {
            document.querySelector('.totalTwo').classList.remove('danger');
        }

        document.querySelector('.totalTwo').classList.add('warning');

    } else if (totalRadioBill > 49.99) {
        if (document.querySelector('.totalTwo').classList.contains('warning')) {
            document.querySelector('.totalTwo').classList.remove('warning');
        }

        document.querySelector('.totalTwo').classList.add('danger');

    }

}

//an event listener for when the add button is pressed

radioAddBtn.addEventListener('click', radioBillTotal);
