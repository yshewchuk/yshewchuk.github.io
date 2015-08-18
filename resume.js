angular.module('resume', [])
    .controller('ResumeCtrl', ['$scope', '$http', function ($scope, $http)
    {
        $http.get('person.json').then(function (response) { $scope.person = response.data; });
    }])
    .directive('header', function ()
    {
        return {
            templateUrl: 'header.html'
        };
    });

document.initialize.push(function ()
{
    angular.bootstrap(document, ['resume']);
});