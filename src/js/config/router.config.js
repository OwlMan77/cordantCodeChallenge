angular
  .module('cordant')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('ClientSelector', {
      url: '/clients',
      templateUrl: '/js/views/clients/index.html',
      controller: 'clientIndexCtrl',
      controllerAs: 'clientIndex'
      })
    .state('ClientPage', {
      url: '/clients/:id',
      templateUrl: '/js/views/clients/show.html',
      controller: 'clientShowCtrl',
      controllerAs: 'clientShow'
    })
    .state('candidateList', {
      url: '/candidates',
      templateUrl: '/js/views/candidates/index.html',
      controller: 'clientIndexCtrl',
      controllerAs: 'clientIndex'
    });

  $urlRouterProvider.otherwise('/');
}
