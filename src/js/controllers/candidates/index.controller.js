angular
  .module('cordant')
  .controller('clientIndexCtrl', indexCtrl);

  indexCtrl.$inject = ['Candidate', 'Postcode'];
  function indexCtrl(Candidate, postcode){
    const vm      = this;
    vm.candidates = Candidate.query();

    vm.getLatLng = () => {
      Postcode
      .get({{id: vm.candidate.postcode}})
      .$promise
      .then(response => {
        vm.candidate.latitude = response.result.latitude,
        vm.candidate.longitude = response.result.longitude
      })
    }

    vm.create = () => Candidate.save(vm.candidate).then( console.log(`${vm.candidate.latitude}`));
  }
