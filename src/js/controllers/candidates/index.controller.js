angular
  .module('cordant')
  .controller('clientIndexCtrl', indexCtrl);

  indexCtrl.$inject = ['Candidate'];
  function indexCtrl(Candidate){
    const vm = this;
    vm.candidates = Candidate.query();
  }
