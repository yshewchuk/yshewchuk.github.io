var resume = angular.module('resume', []);

resume.controller('ResumeCtrl', ['$scope', '$http', '$element', '$timeout', function ($scope, $http, $element, $timeout)
{
    var requiredElements = [
        'titleTemplate',
        'person',
        'skillsTemplate',
        'skillCategories',
        'devExpTemplate',
        'experience'
    ];

    $scope.$watchGroup(requiredElements, function (newValues)
    {
        if (_.all(newValues))
        {
            var sections = angular.element($element).children('.resume-section.off-screen');
            var delay = 500;
            _.forEach(sections, function (section)
            {
                $timeout(function ()
                {
                    angular.element(section).removeClass('off-screen');
                }, delay);
                delay += 100;
            })
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

    $http.get('experience.json').then(function (response) 
    { 
        $scope.experience = response.data; 
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

document.initialize.push(function ()
{
    angular.bootstrap(document, ['resume']);
});