angular
  .module('calculatorApp')
  .controller('CalculatorController', CalculatorController);

  function CalculatorController() {
    var vm = this;

    /* jshint validthis:true */
    vm.greeting = "Yes, sir! I'm calcuclator.";
    vm.sum = sum;
    vm.subtract = subtract; 

    /**
     * Sum two number
     *
     * @param int first_number
     * @param int second_number
     * @returns int sum result
     */
    function sum(first_number, second_number){
      return first_number+second_number;
    }

    /**
     * Subtract two number
     *
     * @param int first_number
     * @param int second_number
     * @returns int subtract result
   */
    function subtract(first_number, second_number){
      return first_number-second_number;
    }
  }
