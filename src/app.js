angular.module('phonebook', [
    'angular-md5'
])
    .controller('PhonebookCtrl', function($scope, PhonebookFactory) {
        $scope.book = PhonebookFactory.load();

        $scope.newItem = {
            fullname: 'Ahmad Rabie',
            email: 'ahmad.rabei.ir@gmail.com',
            phone: '+9893466845463'
        };

        $scope.addItem = function () {
            $scope.book.push(angular.copy($scope.newItem));

            $scope.newItem.fullname = '';
            $scope.newItem.email = '';
            $scope.newItem.phone = '';
        };

        $scope.removeItem = function (item) {
            $scope.book.splice($scope.book.indexOf(item), 1);
        };

        $scope.$watch('book', function () {
            PhonebookFactory.save($scope.book);
        }, true);
    })

    .factory('PhonebookFactory', function ($q) {
        'use strict';

        var STORAGE_ID = 'vendora-book';

        function _getFromLocalStorage() {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        }

        function _saveToLocalStorage(notes) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(notes));
        }

        return {
            save: function (items) {
                _saveToLocalStorage(items);
            },
            load: function () {
                return _getFromLocalStorage();
            }
        };
    })
;