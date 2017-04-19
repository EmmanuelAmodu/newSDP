var sdpNok360 = angular.module('sdpNok360');
sdpNok360.factory('httpService', function($http, $log, $location) {
    var searchUser = function(msisdn){
        return $http({
            method: 'POST',
            url: 'phpscript/submanagement/subscriberActions.php',
            data: $.param({"msisdn": msisdn}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(data){
            return data.data;
        });
    };

    var createService = function(formData){
        return $http({
            method: 'POST',
            url: 'phpscript/serviceman/createService.php',
            data: $.param(formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(data){
            return data.data;
        });
    }

    return {
        "searchUser": searchUser,
        "createService": createService
    };
});