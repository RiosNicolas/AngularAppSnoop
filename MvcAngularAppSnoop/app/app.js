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
                .otherwise({ redirectTo: '/' });
        }]);
})();