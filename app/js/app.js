var mainModule = angular.module('main', []);
mainModule.controller('storyCtrl', ['$scope', '$http', 'levelService', function ($scope, $http, levelService) {
    $scope.levels = levelService.getLevels;

    $scope.spreadStories = function (levelId) {
        $scope.isShowAddButton[levelId] = !$scope.isShowAddButton[levelId];
        if ($scope.spreadButtonValue[levelId] === true) {
            $scope.spreadButtonValue[levelId] = false;
            let level = $scope.levels.filter((it) => it.id === levelId)[0];
            $scope.contentWidth[level.id] = {
                width: 'auto'
            };
            $scope.storiesWidth[level.id] = {
                width: 'calc(100% - 45px)'
            };
            for (let story of level.stories) {
                $scope.positionForStory[story.id] = {};
            }
        } else {
            $scope.spreadButtonValue[levelId] = true;
            initStoriesStyle(levelId);

            $scope.contentWidth[levelId] = {
                width: '500px'
            };
            $scope.storiesWidth[levelId] = {};
        }
    };

    $scope.showCreateStoryDialog = function () {
        if ($scope.isShowCreateStory) {
            return {
                visibility: 'visible'
            };
        } else {
            return {};
        }
    };

    $scope.cancelCreateStoryDialog = function () {
        $scope.isShowCreateStory = false;
    };

    $scope.addStory = function (levelId) {
        $scope.isShowCreateStory = true;
    };

    init();

    function init() {
        $scope.isShowCreateStory = false;
        $scope.positionForStory = [];
        $scope.contentWidth = [];
        $scope.storiesWidth = [];
        $scope.isShowAddButton = [];
        $scope.spreadButtonValue = [];

        initStoriesStyle();
    }

    function initStoriesStyle(levelId) {
        for (let level of $scope.levels) {
            if (levelId === undefined || level.id === levelId) {
                $scope.isShowAddButton[level.id] = true;
                $scope.spreadButtonValue[level.id] = true;
                for (let j = 0; j < level.stories.length; j++) {
                    let story = level.stories [j];
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
    }
}]);