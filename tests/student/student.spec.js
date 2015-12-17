describe('StudentController', function() {
  var student;
  var $scope;

  beforeEach(function () {
    module('studentApp');

    inject(function (_$rootScope_, $controller) {
      $scope = _$rootScope_.$new();
      student = $controller('StudentController', function() {$scope: $scope});
    });
  });

  it('Should return students name', function () {
    expect(student.profiles[0].name).toEqual('abdi');
  });

  it('Should have addStudent function', function () {
    expect(student.addStudent).toBeDefined();
  });

  it('Call addStudent function', function () {
    spyOn(student, 'addStudent');
    student.addStudent('singgih', 'frontend developer');

    expect(student.addStudent).toHaveBeenCalled();
  });

  it('Data student profile should increase when we add it', function () {
    var dataLength = student.profiles.length;
    student.addStudent('pendi', 'web developer');

    expect(student.profiles.length).toBeGreaterThan(dataLength);
  });
});
