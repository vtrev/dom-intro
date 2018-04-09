//reference to the calculate button
var compBtn = document.querySelector('.calculateBtn');

//reference to the billTotal element
var total = document.querySelector('.billTotal');
//reference to the billString
var inputString = document.querySelector('.billString');


//function to run on button click

compBtn.addEventListener('click', function () {
    var billArray = inputString.value.split(",");
    billTotal = 0;
    for (var i = 0; i < billArray.length; i++) {
        if (billArray[i] == 'sms') {
            billTotal = billTotal + 0.75;
        } else if (billArray[i] == 'call') {
            billTotal = billTotal + 2.75;
        } else {}
    }

    document.querySelector('.billTotal').innerHTML = billTotal.toFixed(2);

    //adding a differnt color class for different bill totals

    if (billTotal < 20) {
        if (document.querySelector('.billTotal').classList.contains('warning' || 'danger')) {
            document.querySelector('.billTotal').classList.remove('warning', 'danger');
        }
    } else if ((billTotal >= 19.99) && (billTotal <= 29.99)) {
        if (document.querySelector('.billTotal').classList.contains('danger')) {
            document.querySelector('.billTotal').classList.remove('danger');
        }

        document.querySelector('.billTotal').classList.add('warning');

    } else if (billTotal >= 30) {
        if (document.querySelector('.billTotal').classList.contains('warning')) {
            document.querySelector('.billTotal').classList.remove('warning');
        }

        document.querySelector('.billTotal').classList.add('danger');

    }

});
