var sdpNok360 = angular.module('sdpNok360');
sdpNok360.controller("authController", ['$scope', '$rootScope',  'authentication', function($scope, $rootScope, authentication){
    $scope.login = function (){
        authentication.login($scope.username, $scope.password).then(function(user){
            if(user.userType){
                $rootScope.user = user;
                authentication.loadDashBoard('subscriberMan');
                console.log(user);
            } else {
                $rootScope.user = false;
            }

        }, function(err){
            $rootScope.user = false;
            console.log(err.data);
        });
    };

    authentication.checkState().then(function(data){
        
        if(data.userType){
            $rootScope.user = data;
            authentication.loadDashBoard('subscriberMan');
        } 

    }, function(err){
        $rootScope.user = false;
    });
}]);