var mainModule = angular.module('main', []);
mainModule.controller('storyCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.levels = [
        {
            id: 1,
            stories: [
                {
                    id: 1,
                    name: "First story"
                },
                {
                    id: 2,
                    name: "Second story"
                }
            ]
        },
        {
            id: 2,
            stories: [
                {
                    id: 3,
                    name: "First story"
                }
            ]
        },
        {
            id: 3,
            stories: [
                {
                    id: 4,
                    name: "First story"
                },
                {
                    id: 5,
                    name: "Second story"
                },
                {
                    id: 6,
                    name: "Third story"
                }
            ]
        }
    ];
    $scope.leftForStory = [];


    init();

    function redraw (index, levelSize) {
        return {left : levelSize * 2 - index};
    }

    function init(){
        for (var i=0;i<$scope.levels; i++){
            var lvl = $scope.levels[i];
            redraw(i, lvl.stories.length);
        }

    }
}]);