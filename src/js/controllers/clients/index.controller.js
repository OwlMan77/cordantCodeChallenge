angular
  .module('cordant')
  .controller('clientIndexCtrl', indexCtrl);

  indexCtrl.$inject = ['Client'];
  function indexCtrl(Client){
    const vm   = this;
    vm.clients = Client.query();
  }
