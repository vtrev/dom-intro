describe('The TextBill function', function () {

    it('Should return the correct cost of the computed bill type call or sms', function () {

        var textBill = TextBillLogic();
        textBill.compute('sms');
        assert.equal(textBill.get().total, 0.75)

    });

    it('Should return the correct cost of the computed bill type call or sms', function () {

        var textBill = TextBillLogic();
        textBill.compute('call');
        assert.equal(textBill.get().call, 2.75)

    });
    it('Should return the correct total cost of the computed bills entered', function () {

        var textBill = TextBillLogic();
        textBill.compute('sms');
        textBill.compute('call');
        textBill.compute('call');
        assert.equal(textBill.get().total, 6.25)

    });
    it('Should return the correct call cost for the computed calls', function () {

        var textBill = TextBillLogic();
        textBill.compute('sms');
        textBill.compute('call');
        textBill.compute('call');
        assert.equal(textBill.get().call, 5.5)
    });




});
