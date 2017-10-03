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
        },
        {
            id: 4,
            stories: [
                {
                    id: 7,
                    name: "First story"
                },
                {
                    id: 8,
                    name: "Second story"
                },
                {
                    id: 9,
                    name: "Third story"
                },
                {
                    id: 10,
                    name: "Fourth story"
                }
            ]
        }
    ];

    $scope.spreadStories = function (levelId) {
        $scope.isShowAddButton[levelId] = !$scope.isShowAddButton[levelId];
        if ($scope.spreadButtonValue[levelId] === '=>') {
            $scope.spreadButtonValue[levelId] = '<=';

            for (var i = 0; i < $scope.levels.length; i++) {
                var level = $scope.levels[i];
                if (level.id === levelId) {
                    $scope.contentWidth[i] = {
                        width: 'auto'
                    };
                    $scope.storiesWidth[i] = {
                        width: 'calc(100% - 45px)'
                    };
                    for (var j = 0; j < level.stories.length; j++) {
                        $scope.positionForStory[level.stories[j].id] = {};
                    }
                }

            }
        } else {
            $scope.spreadButtonValue[levelId] = '=>';
            init();

            for (var i = 0; i < $scope.levels.length; i++) {
                var level = $scope.levels[i];
                if (level.id === levelId) {
                    $scope.contentWidth[i] = {
                        width: '500px'
                    };
                    $scope.storiesWidth[i] = {};
                }
            }
        }
    };

    $scope.addStory = function (levelId) {

    };

    init();

    function init() {
        $scope.positionForStory = [];
        $scope.contentWidth = [];
        $scope.storiesWidth = [];
        $scope.isShowAddButton = [];
        $scope.spreadButtonValue = [];

        initStoriesStyle();
    }

    function initStoriesStyle() {
        for (var i = 0; i < $scope.levels.length; i++) {
            var level = $scope.levels [i];
            $scope.isShowAddButton[level.id] = true;
            $scope.spreadButtonValue[level.id] = '=>';
            for (var j = 0; j < level.stories.length; j++) {
                var story = level.stories [j];
                if (j > 0) {
                    $scope.positionForStory[story.id] = {
                        left: (30 * j ) + 'px',
                        top: (-j * 370 + (10 * j)) + 'px',
                        float: 'none'
                    };
                } else {
                    $scope.positionForStory[story.id] = {
                        float: 'none'
                    };
                }
            }
        }
    }
}]);