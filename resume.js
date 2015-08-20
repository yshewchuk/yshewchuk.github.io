var resume = angular.module('resume', []);

resume.controller('ResumeCtrl', ['$scope', '$http', '$element', '$timeout', function ($scope, $http, $element, $timeout)
{
    var requiredElements = [
        'titleTemplate',
        'person',
        'skillsTemplate',
        'skillCategories',
        'devExpTemplate',
        'otherExpTemplate',
        'experience',
        'educationTemplate',
        'education'
    ];

    $scope.$watchGroup(requiredElements, function (newValues)
    {
        if (_.all(newValues))
        {
            angular.element($element).children('.off-screen').removeClass('off-screen');
        }
    });

    $http.get('person.json').then(function (response) 
    { 
        $scope.person = response.data; 
    });

    $http.get('skills.json').then(function (response) 
    { 
        $scope.skillCategories = response.data; 
    });

    $http.get('experience.json').then(function (response) {
        $scope.experience = response.data;
    });

    $http.get('education.json').then(function (response) {
        $scope.education = response.data;
    });
}]);

resume.directive('documentTitle', function ()
{
    return {
        templateUrl: 'document-title.html',
        link: function ($scope)
        {
            $scope.titleTemplate = true;
        }
    };
});

resume.directive('technicalAcumen', function ()
{
    return {
        templateUrl: 'technical-acumen.html',
        link: function ($scope)
        {
            $scope.skillsTemplate = true;
        }
    };
});

resume.directive('developmentExperience', function ()
{
    return {
        templateUrl: 'development-experience.html',
        link: function ($scope)
        {
            $scope.devExpTemplate = true;
        }
    };
});

resume.directive('otherExperience', function ()
{
    return {
        templateUrl: 'other-experience.html',
        link: function ($scope)
        {
            $scope.otherExpTemplate = true;
        }
    };
});

resume.directive('education', function ()
{
    return {
        templateUrl: 'education.html',
        link: function ($scope)
        {
            $scope.educationTemplate = true;
        }
    };
});

resume.filter('digits', function ()
{
    return function (input)
    {
        return typeof input === 'string' ? input.replace(/\D/g, '') : '';
    };
});

document.initialize.push(function ()
{
    angular.bootstrap(document, ['resume']);
});