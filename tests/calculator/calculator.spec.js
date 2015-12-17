describe('CalculatorController', function() {

  var calculator; 
  var $scope;

  beforeEach(function () {
    module('calculatorApp');
    
    inject(function (_$rootScope_, $controller){
      $scope = _$rootScope_.$new();
      calculator = $controller('CalculatorController', {$scope: $scope});
    });
  });

  it('Hi calculator', function () {
    expect(calculator.greeting).toEqual("Yes, sir! I'm calcuclator.");
  });

  it('The sum function must exist', function (){
    expect(calculator.sum).toBeDefined();
  });

  it('Must sum all of the arguments', function (){
    expect(calculator.sum(2,3)).toEqual(5);
  });

  it('The subtract function must exist', function (){
    expect(calculator.subtract).toBeDefined();
  });

  it('Must subtract first number with second number', function (){
    expect(calculator.subtract(2,3)).toEqual(-1);
  });
});
