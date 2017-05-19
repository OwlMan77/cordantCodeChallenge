angular
  .module('cordant')
  .controller('clientIndexCtrl', indexCtrl);

  indexCtrl.$inject = ['Client'];
  function indexCtrl(Client){
    const vm   = this;

    //index api call
    vm.clients = Client.query();

    //post request to create a new client
    vm.create = () => {
      Client
      .save(vm.client)
      .$promise
      .then(() => {
        console.log('Company added');
      });
    }
  }
