describe('The RadioButtonBill function', function () {

    it('Should return the correct total cost of the computed bill type call or sms', function () {

        var radioBill = RadioBillLogic();
        radioBill.compute('sms');
        assert.equal(radioBill.get().total, 0.75)

    });

    it('Should return the correct cost of the computed bill type call or sms', function () {

        var radioBill = RadioBillLogic();
        radioBill.compute('call');
        assert.equal(radioBill.get().call, 2.75)

    });
    it('Should return the correct total cost of the computed bills entered', function () {

        var radioBill = RadioBillLogic();
        radioBill.compute('sms');
        radioBill.compute('call');
        radioBill.compute('call');
        assert.equal(radioBill.get().total, 6.25)

    });
    it('Should return the correct sms total cost of the computed bills entered', function () {

        var radioBill = RadioBillLogic();
        radioBill.compute('sms');
        radioBill.compute('sms');
        radioBill.compute('sms');
        radioBill.compute('call');
        radioBill.compute('call');
        assert.equal(radioBill.get().sms, 2.25)

    });



});
