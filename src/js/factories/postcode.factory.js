angular
.module('cordant')
.factory('Postcode', postcodeFactory);

postcodeFactory.$inject = ['PostcodeAPI', '$resource'];
function postcodeFactory(PostcodeAPI, $resource){
  //sets the types of requests we can make to postcodes.io
  return $resource(`${PostcodeAPI}/postcodes/:id`, {id:'@id'},
  {
    'get': { method: 'GET', isArray: false },
    'query': { method: 'GET', isArray: true }
  }
);
}
