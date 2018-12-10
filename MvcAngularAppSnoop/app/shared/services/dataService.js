(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', ['$http', '$q', function ($http, $q) {

            var service = {};

            service.getClientes = function () {
                var deferred = $q.defer();
                $http.get('/Cliente/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getClienteById = function (id) {
                var deferred = $q.defer();
                $http.get('/Cliente/Details' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addCliente = function (cliente) {
                var deferred = $q.defer();
                $http.post('/Cliente/Create', cliente).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editCliente = function (cliente) {
                var deferred = $q.defer();
                $http.post('/Cliente/Edit', cliente).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.deleteCliente = function (id) {
                var deferred = $q.defer();
                $http.post('/Cliente/Delete', { id: id }).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
        }]);
})();