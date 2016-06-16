var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'DashboardController',
    templateUrl: 'views/dashboard.html'
  })
  .when('/customers', {
    controller: 'CustomersController',
    templateUrl: 'views/customers/index.html'
  })
  .when('/customers/new', {
    controller: 'CustomersController',
    templateUrl: 'views/customers/new.html'
  })
  .when('/customers/:id/edit', {
    controller: 'CustomersController',
    templateUrl: 'views/customers/edit.html'
  })
  .when('/customers/:id', {
    controller: 'CustomersController',
    templateUrl: 'views/customers/show.html'
  })
  .when('/invoices', {
    controller: 'InvoicesController',
    templateUrl: 'views/invoices/index.html'
  })
  .when('/invoices/new', {
    controller: 'InvoicesController',
    templateUrl: 'views/invoices/new.html'
  })
  .when('/invoices/:id/edit', {
    controller: 'InvoicesController',
    templateUrl: 'views/invoices/edit.html'
  })
  .when('/invoices/:id', {
    controller: 'InvoicesController',
    templateUrl: 'views/invoices/show.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
