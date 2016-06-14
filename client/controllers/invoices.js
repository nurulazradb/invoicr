var myApp = angular.module('myApp');

myApp.controller('InvoicesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log('Invoices Controller initialized');

  $scope.getInvoices = function() {
    $http.get('/api/invoices').success(function(response) {
      $scope.invoices = response;
    });
  };

  $scope.getInvoice = function() {
    var id = $routeParams.id;
    $http.get('/api/invoices/' + id).success(function(response) {
      $scope.invoice = response;
    });
  };

  $scope.getCustomers = function() {
    $http.get('/api/customers').success(function(response) {
      $scope.customers = response;
    });
  };

  $scope.addInvoice = function() {
    $http.post('/api/invoices/', $scope.invoice).success(function(response) {
      window.location.href = '/#invoices';
    });
  };
}]);
