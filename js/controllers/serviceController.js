sdpNok360.controller("serviceController", ['$scope', 'httpService', function($scope, httpService){
    $scope.sendData = function(formVA, data){
        httpService.createService(data).then(function(res){
            console.log(res);
            $scope.response = res;
        });
    }
}]);