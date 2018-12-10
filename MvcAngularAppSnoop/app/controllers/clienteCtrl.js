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

            $scope.deleteCliente = function (id) {
                dataService.deleteCliente(id).then(function () {
                    toastr.success('Se borro el Cliente exitosamente');
                    getData();
                }, function () {
                    toastr.error('No se pudo borrar el Cliente de Id: ' + id);
                });
            };

        }])
        .controller('clienteAddCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
            $scope.createCliente = function (cliente) {
                dataService.addCliente(cliente).then(function () {
                    toastr.success('Cliente creado exitosamente!');
                    $location.path('/');
                }, function () {
                    toastr.error('No se pudo crear el Cliente');
                });
            };
        }])
        .controller('clienteEditCtrl', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
            $scope.cliente = {};

            dataService.getClienteById($routeParams.id).then(function (result) {
                $scope.cliente = result;
            }, function () {
                toastr.error('Error al encontrar el Cliente de Id ' + $routeParams.id);
                });

            $scope.updateCliente = function (cliente) {
                dataService.editCliente(cliente).then(function () {
                    toastr.success('El cliente se edito exitosamente');
                    $location.path('/');
                }, function () {
                    toastr.error('No se pudo editar el Cliente');
                });
            };
        }]);
})();