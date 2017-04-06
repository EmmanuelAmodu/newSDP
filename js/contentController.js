
var sdpNok360 = angular.module('sdpNok360');
sdpNok360.controller("contentController", ["$scope", "$http", "$timeout", function($scope, $http, $timeout){
    $scope.addContent = function(addContentForm){
       if(addContentForm.$valid){
            $http({
                method: 'POST',
                url: 'phpscript/content.php',
                data: $.param($scope.formData),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(result){
                if(result.data == 1){
                    $(".not-visible-message").show();
                    $(".not-visible-message").hide(3000);
                    $scope.formData = "";
                }
            }, function(err){
                console.log(err.data);
            });
        }
   };

}]);