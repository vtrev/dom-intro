describe('The settingsBill function', function () {

    it('Should return the correct total cost of the computed bill with respect to the set costs and quantity of each bill type computed', function () {

        var settingsBill = settingsBillLogic();

        settingsBill.setCall('5');
        settingsBill.setSms('2');
        settingsBill.setCritical('10');
        settingsBill.compute('call');
        settingsBill.compute('call');

        assert.equal(settingsBill.total(), 10);

    });

    it('Should return a total of 0 if anything not call or sms was computed', function () {

        var settingsBill = settingsBillLogic();

        settingsBill.setCall('5');
        settingsBill.setSms('2');
        settingsBill.setCritical('10');
        settingsBill.compute('nothing');
        settingsBill.compute('');

        assert.equal(settingsBill.total(), 0);



    });
    it('Should ensure the total is always equal or lower than the critical value', function () {

        var settingsBill = settingsBillLogic();

        settingsBill.setCall('5');
        settingsBill.setSms('2');
        settingsBill.setCritical('10');
        settingsBill.compute('call');
        settingsBill.compute('call');
        settingsBill.compute('call');


        assert.isAtMost(settingsBill.total(), settingsBill.bill.critical)



    });



});
