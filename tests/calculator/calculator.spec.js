describe('CalculatorController', function() {
  // beforeEach(module('calculatorApp'));

  var controller; 
  var $scope;

  beforeEach(function () {
    module('calculatorApp');
    
    inject(function (_$rootScope_, $controller){
      $scope = _$rootScope_.$new();
      controller = $controller('CalculatorController', {$scope: $scope});
    });
  });

  it('says hello', function () {
    expect(controller.greeting).toEqual('Hello');
  });
});
