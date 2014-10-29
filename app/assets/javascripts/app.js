var controllers, receta;

receta = angular.module('receta', ['templates', 'ngRoute', 'controllers']);

receta.config(['$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: "index.html",
      controller: 'RecipesController'
    });
  }
]);

var recipes = [
  {
    id: 1,
    name: 'Baked Potato w/ Cheese'
  },
  {
    id: 2,
    name: 'Garlic Mashed Potatoes'
  },
  {
    id: 3,
    name: 'Potatoes Au Gratin'
  },
  {
    id: 4,
    name: 'Baked Brussel Sprouts'
  },
];

controllers = angular.module('controllers', []);

controllers.controller("RecipesController", [
	'$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
		var keywords;
		// Defining the search method on this controller
		$scope.search = function(keywords) {
			return $location.path("/").search('keywords', keywords);
		};
		//  Body of the controller
		if ($routeParams.keywords) {
			keywords = $routeParams.keywords.toLowerCase();
			return $scope.recipes = recipes.filter(function(recipe) {
				return recipe.name.toLowerCase().indexOf(keywords) !== -1;
			});
		} else {
			return $scope.recipes = [];
		}
	}
]);