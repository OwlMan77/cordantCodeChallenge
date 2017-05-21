angular
  .module('cordant')
  .controller('clientIndexCtrl', indexCtrl);

  indexCtrl.$inject = ['Client','Candidate', 'Postcode'];
  function indexCtrl(Client, Candidate, Postcode){
    const vm   = this;

    //index api call
    vm.clients = Client.query();
    vm.candidates = Candidate.query();

    vm.createCandidate = () =>{
      Postcode
      .get({id:vm.candidate.postcode})
      .$promise
      .then(response =>
        {
          vm.candidate.latitude = response.result.latitude,
          vm.candidate.longitude = response.result.longitude
        }
      );
      
      Candidate
      .save(vm.candidate)
      .$promise
      .then(() => {
        location.reload();
      });
    }

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
