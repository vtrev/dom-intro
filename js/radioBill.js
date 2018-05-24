//a reference to the add button
var radioAddBtn = document.querySelector('.radioBillAddBtn');

// a reference to the radioBill total element
var radioTotal = document.querySelector('.totalTwo');

function totalsInit() {
    var totalsTwoDataElement = document.getElementById("totalsTwoTable");
    var totalsTwoTemplateSource = document.getElementById('totalTwoTemplate').innerHTML;
    var totalsTwoTemplate = Handlebars.compile(totalsTwoTemplateSource);
    totalsTwoDataElement.innerHTML = totalsTwoTemplate({
        callTotalTwo: '0.00',
        smsTotalTwo: '0.00',
        totalTwo: '0.00'
    });

}
totalsInit();



function getRadioBtn() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    return {
        billType: checkedRadioBtn.value
    }
}

function setRadioTotals() {

    // sum up the totals and update the total displayed on the screen

    var totalsTwoDataElement = document.getElementById("totalsTwoTable");
    var totalsTwoTemplateSource = document.getElementById('totalTwoTemplate').innerHTML;
    var totalsTwoTemplate = Handlebars.compile(totalsTwoTemplateSource);
    var totals = {}
    totals.callTotalTwo = radioBill.get().call;
    totals.smsTotalTwo = radioBill.get().sms;
    totals.totalTwo = radioBill.get().total;
    var totalsTwoHTML = totalsTwoTemplate(totals);
    totalsTwoDataElement.innerHTML = totalsTwoHTML;
}






//the totalBill function to execute on button click

function applyRadioBillStyle(totalRadioBill) {
    // reference to the checked radio but
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

radioAddBtn.addEventListener('click', function run() {
    getRadioBtn();
    var checkedRadioBtn = getRadioBtn().billType;
    radioBill.compute(checkedRadioBtn);
    setRadioTotals();
    applyRadioBillStyle(radioBill.get().total);



});