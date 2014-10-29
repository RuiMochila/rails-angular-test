var controllers, receta;

receta = angular.module('receta', [
	'templates', 
	'ngRoute', 
	'controllers',
	'ngResource', 
	'controllers',
	'angular-flash.service',
	'angular-flash.flash-alert-directive'
]);

receta.config(['$routeProvider', 'flashProvider', function($routeProvider, flashProvider) {
	
	flashProvider.errorClassnames.push("alert-danger");
	flashProvider.warnClassnames.push("alert-warning");
	flashProvider.infoClassnames.push("alert-info");
	flashProvider.successClassnames.push("alert-success");

    return $routeProvider
    .when('/', {
      templateUrl: "index.html",
      controller: 'RecipesController'
    }).when('/recipes/new', {
		templateUrl: "form.html",
		controller: 'RecipeController'
    }).when('/recipes/:recipeId', {
    	templateUrl: "show.html",
    	controller: 'RecipeController'
    }).when('/recipes/:recipeId/edit', {
		templateUrl: "form.html",
		controller: 'RecipeController'
	});
	
  }
]);

// Cena sobre acesso a modulos e asset pipelines, no outro lado apenas busquei este por referencia, sem criar com mesmo nome. 
//daria erro. Mas pronto, eu passei esta linha para lá e tudo funcionava...
//Ah... tinha a ver com o precompile de coffee script.. porque fecha todos em self executing functions. closures.
controllers = angular.module('controllers', []);