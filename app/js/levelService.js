var myModule = angular.module('main');
myModule.service('levelService', ['$http', function ($http) {
    function getLevels () {
        return [
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
    }

    return {
        getLevels: getLevels()
    };
}]);