  var calculateBill = function (billString) {

      var billTotal = 0;

      var billArray = billString.split(",")


      for (var i = 0; i < billArray.length; i++) {
          if (billArray[i] == 'sms') {
              billTotal = billTotal + 0.75;
          } else if (billArray[i] == 'call') {
              billTotal = billTotal + 2.75;
          } else {}
      }
      return {

          total: billTotal
      }
  }
