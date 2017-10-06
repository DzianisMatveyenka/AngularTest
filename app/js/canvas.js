let canvasModule = angular.module('testCanvas', []);
canvasModule.controller('canvasCtrl', ['$scope', function ($scope) {
    let canvas = document.getElementById('testCanvas');
    let ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}]);