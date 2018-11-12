    var settingsBill = SettingsBillLogic();

    var addButtonSet = document.querySelector('.addWithSetting');
    var updateBtn = document.querySelector('.updateSettings');
    var totalSettings = document.querySelector('.totalSettings');

    //function to get and return dom elements and return their values
    var getDom = function () {
        var callSetting = document.querySelector('.callCostSetting').value;

        var smsSetting = document.querySelector('.smsCostSetting').value;

        var warningSetting = document.querySelector('.warningLevelSetting').value;
        var criticalSetting = document.querySelector('.criticalLevelSetting').value;


        return {
            callSetting: callSetting,
            smsSetting: smsSetting,
            warningSetting: warningSetting,
            criticalSetting: criticalSetting

        }
    }


    //function to set the calcutalted values to the html
    var setSettingsBill = function () {

        document.querySelector('.callTotalSettings').innerHTML = parseFloat(settingsBill.getCall()).toFixed(2);

        document.querySelector('.smsTotalSettings').innerHTML = parseFloat(settingsBill.getSms()).toFixed(2);

        totalSettings.innerHTML = parseFloat(settingsBill.total()).toFixed(2);

    }

    //apply color to the total 
    function applySettingsColor() {

        var billSettingTotal = settingsBill.total();
        var warning = getDom().warningSetting;
        var criticalSetting = getDom().criticalSetting;

        if ((billSettingTotal >= parseFloat(warning)) && (billSettingTotal < parseFloat(criticalSetting))) {
            if (document.querySelector('.totalSettings').classList.contains('danger')) {
                document.querySelector('.totalSettings').classList.remove('danger');
            }

            document.querySelector('.totalSettings').classList.add('warning');

        } else if (billSettingTotal >= parseFloat(criticalSetting)) {
            if (document.querySelector('.totalSettings').classList.contains('warning')) {
                document.querySelector('.totalSettings').classList.remove('warning');
            }

            document.querySelector('.totalSettings').classList.add('danger');
        }


    }


    //an event listener for the update button

    updateBtn.addEventListener('click', function run() {
        //get dom elements and create variables for each one of them  
        getDom();
        var criticalSetting = getDom().criticalSetting;
        var callSetting = getDom().callSetting;
        var smsSetting = getDom().smsSetting;
        //    parse the settings into the logic
        settingsBill.setCall(callSetting);
        settingsBill.setSms(smsSetting);
        settingsBill.setCritical(criticalSetting);
    });

    //an event listener for the add button
    addButtonSet.addEventListener('click', function run() {
        var checkedRadioBtn1 = document.querySelector("input[name='billItemTypeWithSettings']:checked").value;

        settingsBill.compute(checkedRadioBtn1);
        setSettingsBill();
        applySettingsColor();
    });