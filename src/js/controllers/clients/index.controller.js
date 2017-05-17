angular
  .module('cordant')
  .controller('clientIndexCtrl', indexCtrl);

  indexCtrl.$inject = ['Client'];
  function indexCtrl(Client){
    const vm   = this;
    vm.test    = "hello"; 
    vm.clients = Client.query();
  }
