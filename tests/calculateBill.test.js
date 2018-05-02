describe('CalculateBIllFunction',function(){
it('should return the total amount of the bill after calculating how many SMS and CALL items there is in the input string',function(){
    assert.equal(2.75,calculateBill('call').total)
    });

it('should return the total amount of the bill after calculating how many SMS and CALL items there is in the input string',function(){
        assert.equal(8.25,calculateBill('call,call,call').total)
        });
it('should return 0 if there are no calls or sms in the input string',function(){
            assert.equal(0,calculateBill('anything else').total)
            });
});
