angular.module('phonebook', [
    'angular-md5'
])
    .controller('PhonebookCtrl', function($scope) {
        $scope.book = [];

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
    })
;