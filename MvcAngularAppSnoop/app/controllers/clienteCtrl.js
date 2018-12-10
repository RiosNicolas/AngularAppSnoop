(function () {
    'use strict';

    angular
        .module('app')
        .controller('clienteCtrl', ['$scope', 'dataService', function ($scope, dataService) {
            $scope.clientes = [];

            getData();

            function getData() {
                dataService.getClientes().then(function (result) {
                    $scope.clientes = result;
                });
            }
        }]);
})();