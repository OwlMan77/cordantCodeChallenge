angular
.module('cordant')
.factory('Client', clientFactory);

clientFactory.$inject = ['API', '$resource'];

function clientFactory(API, $resource){
//sets up the type of API requests we can make for clients
  return $resource(`${API}/clients/:id`, {id: '@_id'},
  {
      'get': { method: 'GET', isArray: false },
      'save': { method: 'POST' },
      'query': { method: 'GET', isArray: true },
      'remove': { method: 'DELETE' },
      'delete': { method: 'DELETE' }
    }
  );
}
