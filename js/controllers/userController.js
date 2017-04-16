var sdpNok360 = angular.module('sdpNok360');
sdpNok360.controller("userController", ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){

    function getUsers(){
        $http.get('phpscript/usermanagement/usersList.php').then(function(result){
            $scope.usersDetails = result.data;
        }, function(err){
            console.log(err);
        });
    }
    getUsers();

    $scope.editUser = function(n){
        $scope.editUserP = n;
    };

    $scope.closeModal = function(){
        $(".modal").modal('hide');
    };

   $scope.editUserProfile = function(editUserForm){
       if(editUserForm.$valid){
            $http({
                method: 'POST',
                url: 'phpscript/usermanagement/updateUser.php',
                data: $.param($scope.editUserP),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(result){
                console.log(result.data);
                if(result.data == 1){
                    $scope.closeModal();
                }
            }, function(err){
                console.log(err.data);
            });
        }
   };

   $scope.addUserProfile = function(addUserForm){
       if(addUserForm.$valid){
            $http({
                method: 'POST',
                url: 'phpscript/usermanagement/insertUser.php',
                data: $.param($scope.addUserP),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(result){
                if(result.data == 1){
                    $scope.closeModal();
                    getUsers();
                }
            }, function(err){
                console.log(err.data);
            });
        }
   };

   $scope.deleteUser = function(){
        $http({
            method: 'POST',
            url: 'phpscript/usermanagement/deleteUser.php',
            data: $.param($scope.editUserP),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(result){
            if(result.data == 1){
                $scope.closeModal();
                getUsers();
            }
        }, function(err){
            console.log(err.data);
        });
   };
}]);