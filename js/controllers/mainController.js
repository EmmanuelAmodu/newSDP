var sdpNok360 = angular.module('sdpNok360');

sdpNok360.controller("mainController", ['$scope', '$rootScope',  'authentication', function($scope, $rootScope, authentication){
    authentication.checkState().then(function(data){
        if(data.userType){
            $rootScope.user = data;
        } else {
            $rootScope.user = false;
            authentication.loadDashBoard('login');
        }

    }, function(err){
        $rootScope.user = false;
    });

    $scope.logout = function(){
        authentication.logout();
        $rootScope.user = false;
        authentication.loadDashBoard('login');
    }
}]);