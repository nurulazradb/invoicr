var myApp = angular.module('myApp');

myApp.controller('CustomersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log('Customers Controller initialized');

  $scope.getCustomers = function() {
    $http.get('/api/customers').success(function(response) {
      $scope.customers = response;
    });
  };

  $scope.getCustomer = function() {
    var id = $routeParams.id;
    $http.get('/api/customers/' + id).success(function(response) {
      $scope.customer = response;
    });
  };

  $scope.getCustomerInvoices = function() {
    var id = $routeParams.id;
    $http.get('/api/invoices/customer/' + id).success(function(response) {
      $scope.customer_invoices = response;
    });
  };

  $scope.addCustomer = function() {
    $http.post('/api/customers/', $scope.customer).success(function(response) {
      window.location.href = '/#customers';
    });
  };
}]);
