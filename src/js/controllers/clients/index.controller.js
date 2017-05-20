angular
  .module('cordant')
  .controller('clientIndexCtrl', indexCtrl);

  indexCtrl.$inject = ['Client','Candidate'];
  function indexCtrl(Client, Candidate){
    const vm   = this;

    //index api call
    vm.clients = Client.query();
    vm.candidates = Candidate.query();

    //post request to create a new client
    vm.create = () => {
      Client
      .save(vm.client)
      .$promise
      .then(() => {
        location.reload();
      });
    };
  }
