// get a reference to the sms or call radio buttons


// get refences to all the settings fields

var callSetting = document.querySelector('.callCostSetting');
var smsSetting = document.querySelector('.smsCostSetting');
var warningSetting = document.querySelector('.warningLevelSetting');
var criticalSetting = document.querySelector('.criticalLevelSetting');
var totalSettings = document.querySelector('.totalSettings');
var criticalSettingValue = 0;


// c variables that will keep track of all three totals.
var billSettingTotal = 0;
var smsSetTotal = 0;
var callSetTotal = 0;

//a reference to the add button
var addButtonSet = document.querySelector('.addWithSetting');

//reference to the 'Update settings' button
var updateBtn = document.querySelector('.updateSettings');


function settingsTotal() {
    var checkedRadioBtn1 = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkedRadioBtn1.value === "call") {
        if (billSettingTotal < parseFloat(criticalSetting.value)) {
            callSetTotal += parseFloat(callSetting.value);
        }
        if (billSettingTotal > parseFloat(criticalSetting.value)) {
            callSetTotal += 0;

        }


    } else if (checkedRadioBtn1.value === "sms") {
        if (billSettingTotal < parseFloat(criticalSetting.value)) {
            smsSetTotal += parseFloat(smsSetting.value);
        } else if (billSettingTotal >= parseFloat(criticalSetting.value)) {
            smsSetTotal += 0;
            document.querySelector('.totalSettings').classList.add('danger');
        }

    }

    document.querySelector('.callTotalSettings').innerHTML = callSetTotal.toFixed(2);
    document.querySelector('.smsTotalSettings').innerHTML = smsSetTotal.toFixed(2);
    classColor();
}

function classColor() {
    billSettingTotal = callSetTotal + smsSetTotal;

    if ((billSettingTotal >= parseFloat(warningSetting.value)) && (billSettingTotal < parseFloat(criticalSetting.value))) {
        if (document.querySelector('.totalSettings').classList.contains('danger')) {
            document.querySelector('.totalSettings').classList.remove('danger');
        }

        document.querySelector('.totalSettings').classList.add('warning');

    } else if (billSettingTotal >= parseFloat(criticalSetting.value)) {
        if (document.querySelector('.totalSettings').classList.contains('warning')) {
            document.querySelector('.totalSettings').classList.remove('warning');
        }

        document.querySelector('.totalSettings').classList.add('danger');
    }

    finTotal();
    totalSettings.innerHTML = billSettingTotal.toFixed(2);
}

function finTotal() {
    if (billSettingTotal > criticalSettingValue) {
        var over = billSettingTotal - criticalSettingValue;
        billSettingTotal = billSettingTotal - over;
    }
}




function settings() {
    var smsSettingValue = smsSetting.value;
    var callSettingValue = callSetting.value;
    var warningSettingValue = warningSetting.value;
    criticalSettingValue = criticalSetting.value;

    //totalSettings.innerHTML = billSettingTotal.toFixed(2);
}

//add an event listener for when the 'Update settings' button is pressed

updateBtn.addEventListener('click', settings);
addButtonSet.addEventListener('click', settingsTotal);






//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
