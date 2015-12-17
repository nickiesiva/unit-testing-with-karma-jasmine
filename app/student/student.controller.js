angular
  .module('studentApp')
  .controller('StudentController', StudentController);

  function StudentController() {
    var vm = this;
    vm.addStudent = addStudent;

    vm.profiles = [
      {
        name: 'abdi',
        focus: 'web developer'
      },
      {
        name: 'nicky',
        focus: 'web developer'
      },
      {
        name: 'rosid',
        focus: 'android developer'
      }
    ];

    /**
     * Add data student profile.
     *
     * @param string name
     * @param string focus
     */
    function addStudent(name, focus) {
      var data = {
        name: name,
        focus: focus
      }

      vm.profiles.push(data);
    }
  }
