angular
.module('cordant')
.controller('clientShowCtrl', showCtrl);

showCtrl.$inject = ['Client', '$stateParams'];
function showCtrl(Client, $stateParams){
 const vm = this;
  Client
  .get($stateParams)
  .$promise.then(response => {
    vm.client = response;
  });
}
