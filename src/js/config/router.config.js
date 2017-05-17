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
    .state('ClientSelector',
  {
    url: '/clients',
    templateUrl: '/js/views/clients.html',
    controller: 'clientIndexCtrl',
    controllerAs: 'clientIndex'
  });
  $urlRouterProvider.otherwise('/');
}
