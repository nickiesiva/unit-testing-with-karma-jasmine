angular
  .module('calculatorApp')
  .controller('CalculatorController', CalculatorController);

  function CalculatorController() {
    var vm = this;

    /* jshint validthis:true */
    vm.greeting = "Yes, sir! I'm calcuclator.";
    vm.sum = sum;
    vm.subtract = subtract; 

    function sum(first_number, second_number){
      return first_number+second_number;
    }

    function subtract(first_number, second_number){
      return first_number-second_number;
    }
  }
