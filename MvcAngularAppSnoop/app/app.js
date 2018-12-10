(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute'
        ])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

            $locationProvider.hashPrefix('');

            $routeProvider
                .when('/', {
                    controller: 'clienteCtrl',
                    templateUrl: '/app/templates/cliente.html'
                })
                .when('/addcliente', { 
                    controller: 'clienteAddCtrl',
                    templateUrl: '/app/templates/clienteAdd.html'
                })
                .when('/editcliente/:id', {
                    controller: 'clienteEditCtrl',
                    templateUrl: '/app/templates/clienteEdit.html'
                })

                .otherwise({ redirectTo: '/' });
        }]);
})();