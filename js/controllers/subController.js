sdpNok360.controller("subController", ['$scope', 'httpService', function($scope, httpService){
    $scope.searchUser = function(msisdn){
        httpService.searchUser(msisdn).then(function(res){
            console.log(res);
            $scope.msisdnSub = res;
        });
    }
}]);