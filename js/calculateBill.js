//reference to the calculate button
var compBtn = document.querySelector('.calculateBtn');

//reference to the billTotal element
var total = document.querySelector('.billTotal');
//reference to the billString


//function to run on button click
//var get = compute1(inputString);
//function that gets and returns the billType from the input box
var getInput = function () {
    var billInput = document.querySelector('.billString');
    var inputValue = billInput.value;

    //var inputArray = inputValue.split(",");
    return {
        inputValue: inputValue
        //inputArray : inputArray
    }
}

//var get = getInput();


//var billArray = inputString.split(",");


function setStyle1(billTotal) {
    //adding a differnt color class for different bill totals
    if (billTotal < 20) {
        if (document.querySelector('.billTotal').classList.contains('warning' || 'danger')) {
            document.querySelector('.billTotal').classList.remove('danger', 'warning');
        }
        document.querySelector('.billTotal').classList.add('noStyle');

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


}


compBtn.addEventListener('click', function () {
    var get = getInput();
    var billTotal = calculateBill(get.inputValue).total;

    document.querySelector('.billTotal').innerHTML = billTotal.toFixed(2)

    setStyle1(billTotal);

});