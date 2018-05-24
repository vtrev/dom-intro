//=======================================================DOM ELEMENTS=====================================================//

// a reference to the add button
var textTotalAddBtn = document.querySelector('.addToBillBtn');

//function that gets and returns the billType from the input box
function getBillType() {
    var inputString1 = document.querySelector('.billTypeText');
    var billTypeEntered = inputString1.value.trim();
    return {
        billType: billTypeEntered
    }
}


//console.log('entering textBill ... ');

//update the totals that is displayed on the screen.  
function setTotals() {
    console.log('setting totals...')
    var totalsDataElement = document.getElementById("totalsOneTable");
    var totalsOneTemplateSource = document.getElementById('totalOneTemplate').innerHTML;
    var totalsOneTemplate = Handlebars.compile(totalsOneTemplateSource);
    var totals = {}
    totals.callTotalOne = textBill.get().call;
    totals.smsTotalOne = textBill.get().sms;
    totals.totalOne = textBill.get().total;
    console.log(totals);
    var totalsOneHTML = totalsOneTemplate(totals);
    totalsDataElement.innerHTML = totalsOneHTML;



}

function setStyle() {

    //applying different colors for different values
    if ((textBill.get().total > 29.99) && (textBill.get().total <= 49.99)) {
        if (document.querySelector('.totalOne').classList.contains('danger')) {
            document.querySelector('.totalOne').classList.remove('danger');
        }

        document.querySelector('.totalOne').classList.add('warning');

    } else if (textBill.get().total > 49.99) {
        if (document.querySelector('.totalOne').classList.contains('warning')) {
            document.querySelector('.totalOne').classList.remove('warning');
        }

        document.querySelector('.totalOne').classList.add('danger');

    }
}



//an event listener for when the add button is pressed

textTotalAddBtn.addEventListener('click', function run() {
        getBillType();
        var billTypeEntered = getBillType().billType;
        textBill.compute(billTypeEntered);
        // getTotals();
        setTotals();
        setStyle();

    }

);