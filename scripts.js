var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.isDropdownVisible = false;
    $scope.selectedItem = "";

    $scope.toggleDropdown = function() {
        $scope.isDropdownVisible = !$scope.isDropdownVisible;
    };

    $scope.selectItem = function(item) {
        $scope.selectedItem = item;
        $scope.isDropdownVisible = false;
    };
});
