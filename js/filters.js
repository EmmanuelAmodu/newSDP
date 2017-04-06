'use strict';

var sdpNok360 = angular.module('sdpNok360');
sdpNok360.filter("userTypes", function(){
    return function(userType) {
        switch(userType) {
            case "1":
                return "Super User";
            case "2":
                return "Content Manager";
            case "3":
                return "Viewer";
            case "4":
                return "Subscriber Manger";
            case "5":
                return "am a Manger";
        }
    }
});

