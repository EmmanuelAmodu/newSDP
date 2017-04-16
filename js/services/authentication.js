var sdpNok360 = angular.module('sdpNok360');
sdpNok360.factory('authentication', function($http, $log, $location) {
    var login = function(username, password){
        return $http({
            method: 'POST',
            url: 'phpscript/auth.php',
            data: $.param({username: username, password: password}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(data){
            return data.data;
        });
    };

    var checkState = function(){
        return $http({
            method: 'POST',
            url: 'phpscript/auth.php',
            data: $.param({checkstate: true}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(data){
            return data.data;
        });
    };

    var logout = function(){
        return $http({
            method: 'POST',
            url: 'phpscript/auth.php',
            data: $.param({logout: true}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(data){
            return data.data;
        });
    };

    var loadDashBoard = function(where){
        $location.path('/'+where);
    }

    return {
        "login": login,
        "checkState": checkState,
        "loadDashBoard": loadDashBoard,
        "logout": logout
    };
});