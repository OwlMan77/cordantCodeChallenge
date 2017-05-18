angular
.module('cordant')
.factory('Postcode', postcodeFactory);

postcodeFactory.$inject = ['PostcodeAPI', '$resource'];
function postcodeFactory(PostcodeAPI, $resource){
  return $resource(`${PostcodeAPI}/postcodes/:id`, null,
  {
    'get': { method: 'GET', isArray: false },
    'query': { method: 'GET', isArray: true }
  }
);
}
