var TextBillLogic = function () {
    //initialising calculating varibles
    var callsTotal = 0.00;
    var smsTotal = 0.00;

    //function that handles the maths

    var compute = function (billTypeEntered) {
        console.log('now computing ...')
        if (billTypeEntered === "call") {
            callsTotal += 2.75;
            console.log(billTypeEntered);

        }
        if (billTypeEntered === "sms") {
            smsTotal += 0.75;
            console.log(billTypeEntered);

        }
    }

    var getTotals = function () {

        return {
            sms: smsTotal.toFixed(2),
            total: (smsTotal + callsTotal).toFixed(2),
            call: callsTotal.toFixed(2)
        }
    }

    return {
        compute: compute,
        get: getTotals

    }
}
var textBill = TextBillLogic();