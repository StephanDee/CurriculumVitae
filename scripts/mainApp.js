'use strict';
angular.module('mainApp', ['ngMaterial', 'ngMessages'])
    .controller('mainCtrl', function ($scope) {
        $scope.subject = '';
        $scope.message = '';

        $scope.sendMessage = function (subject, message) {
            const encodedMessage = encodeURI(message); // message.replace(/\r|\n|\r\n/g, '%0A'); REGEX Variant
            window.location.href = `mailto:duenkel.stephan@gmail.com?subject=${subject}&body=${encodedMessage}`;
        }
    });