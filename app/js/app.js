var mainModule = angular.module('main', []);
mainModule.controller('storyCtrl', ['$scope', '$http', function ($scope, $http) {
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
    $scope.positionForStory = [];

    init();

    function init() {
        for (var i = 0; i < $scope.levels.length; i++) {
            var level = $scope.levels [ i ];
            for (var j = 0; j < level.stories.length; j++) {
                var story = level.stories [ j ];
                if (j > 0) {
                    $scope.positionForStory[ story.id ] = {
                        left: (30 * j ) + 'px',
                        top: (-j * 370 + (10 * j)) + 'px'
                    };
                }
            }
        }

    }
}]);