var RadioBillLogic = function () {

    //variables that will keep track of the totals
    var callsTotalOne = 0;
    var smsTotalOne = 0;

    var computeRadio = function (checkedRadioBtn) {
        console.log('now compiting radioBill..');
        if (checkedRadioBtn === "call") {
            callsTotalOne += 2.75;
            console.log(checkedRadioBtn);

        }
        if (checkedRadioBtn === "sms") {
            smsTotalOne += 0.75;
            console.log(checkedRadioBtn);

        }
    }
    var getRadioTotals = function () {

        return {
            sms: smsTotalOne.toFixed(2),
            total: (smsTotalOne + callsTotalOne).toFixed(2),
            call: callsTotalOne.toFixed(2),

        }
    }

    return {
        get: getRadioTotals,
        compute: computeRadio


    }



}
var radioBill = RadioBillLogic();
