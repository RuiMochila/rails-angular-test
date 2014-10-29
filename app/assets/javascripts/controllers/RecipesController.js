var recipes = [];

controllers = angular.module('controllers');

controllers.controller("RecipesController", [
	'$scope', '$routeParams', '$location', '$resource', function($scope, $routeParams, $location, $resource) {
		var keywords;
		// Defining the search method on this controller
		$scope.search = function(keywords) {
			return $location.path("/").search('keywords', keywords);
		};

		var Recipe;
		Recipe = $resource('/recipes/:recipeId', {
		  recipeId: "@id",
		  format: 'json'
		});

		//  Body of the controller
		if ($routeParams.keywords) {
			Recipe.query({
			  keywords: $routeParams.keywords
			}, function(results) {
				console.log(results);
			  return $scope.recipes = results;
			});
		} else {
			return $scope.recipes = [];
		}

		$scope.view = function(recipeId) {
			return $location.path("/recipes/" + recipeId);
		};

		$scope.newRecipe = function() {
		  return $location.path("/recipes/new");
		};

		$scope.edit = function(recipeId) {
		  return $location.path("/recipes/" + recipeId + "/edit");
		};

	}
]);
