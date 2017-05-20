angular
.module('cordant')
.controller('candidateIndexCtrl', indexCtrl);

  showCtrl.$inject = ['Candidate','Postcode'];
  function indexCtrl(Candidate){
    const vm   = this;

    //index api call
    vm.candidates = Candidate.query();

    //post request to create a new client
    vm.create = () => {
      Client
      .save(vm.candidate)
      .$promise
      .then(() => {
        location.reload();
      });
    };
  }
