angular
.module('cordant')
.controller('clientShowCtrl', showCtrl);

showCtrl.$inject = ['Client', '$stateParams', 'NgMap', 'GmapAPIKey'];
function showCtrl(Client, $stateParams, NgMap, GmapAPIKey){
 const vm = this;
  NgMap.getMap().then(function(map) {
   console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });

  vm.googleMapsUrl= `https://maps.googleapis.com/maps/api/js?key=${GmapAPIKey}`
  Client
  .get($stateParams)
  .$promise.then(response => {
    vm.client = response;
  });
}
