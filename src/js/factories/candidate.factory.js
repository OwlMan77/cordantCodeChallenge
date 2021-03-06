angular
.module('cordant')
.factory('Candidate', candidateFactory);

candidateFactory.$inject = ['API', '$resource'];

function candidateFactory(API, $resource){
//sets up the type of API requests we can make for candidates
  return $resource(`${API}/candidates/:id`, {id: '@_id'},     {
      'get': { method: 'GET', isArray: false },
      'save': { method: 'POST' },
      'query': { method: 'GET', isArray: true },
      'remove': { method: 'DELETE' },
      'delete': { method: 'DELETE' }
    }
  );
}
