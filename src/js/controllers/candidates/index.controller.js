angular
  .module('cordant')
  .controller('candidateIndexCtrl', indexCtrl);
  indexCtrl.$inject = ['Candidate', 'Postcode'];
  function indexCtrl(Candidate, Postcode){
    const vm      = this;
    vm.candidates = Candidate.query();
    vm.test       = 'test';
    // vm.getLatLng = () => {
    //   Postcode
    //   .get({id: vm.candidate.postcode})
    //   .$promise
    //   .then(
    //     response => {
    //       vm.candidate.latitude = response.result.latitude,
    //       vm.candidate.longitude = response.result.longitude
    //   }
    // );
  // }

    vm.create = () => {
      Candidate.save(vm.candidate).then( console.log(`${vm.candidate.latitude}`));
    }
  }
