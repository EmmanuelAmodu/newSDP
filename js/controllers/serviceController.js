sdpNok360.controller("serviceController", ['$scope', 'httpService', '$http', function($scope, httpService, $http){
    $scope.sendData = function(formVA, data){
        console.log(data);
        httpService.createService(data).then(function(res){
            console.log(res);
            $scope.response = res;
        });
        /*
        $http({
            method: 'POST',
            url: 'phpscript/serviceman/createService.php',
            data: $.param(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(res){
            $scope.response = res.data;
             console.log(res.data);
            return res.data;
        });
        */
    }
}]);