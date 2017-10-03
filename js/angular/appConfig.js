angular.module("richiesteReteApp").config(function ($stateProvider, $urlRouterProvider) {
	
//	$stateProvider.state("home", {
//		  template: "<h1>HELLO!</h1>"
//		})	
//	
    $urlRouterProvider.otherwise("/");

    $stateProvider
	.state('/', {
		url:'/index',
		templateUrl: '/index.html',
		controller: 'indexController'
	}).state('test', {
		url:'/test',
		templateUrl: 'html/test.html',
		controller: 'testController'
	}).state('index',{
	    	url: "/index",
	        templateUrl: 'index.html',
	        controller: 'tabelleRichiesteController'
	    }).state('tabella',{
	    	url: "/tabella/:stato",
	        templateUrl: 'html/tabelleRichieste.html',
	        controller: 'tabelleRichiesteController'
	    }).state('nuova',{
	    	url: "/nuovaRichiesta",
	        templateUrl: 'html/nuovaRichiesta.html',
	        controller: 'nuovaRichiestaController'
	    }).state('gruppo',{
	    	url: "/gruppo/:stato",
	        templateUrl: 'html/gruppiRichieste.html',
	        controller: 'gruppiRichiesteController'
	    }).state('gruppoIP',{
	    	url: "/gruppoIP/:stato",
	        templateUrl: 'html/gruppiIP.html',
	        controller: 'gruppiRichiesteController'
	    }).state('gruppoRichiedente',{
	    	url: "/gruppoRichiedente/:stato",
	        templateUrl: 'html/gruppiRichiedente.html',
	        controller: 'gruppiRichiesteController'
	    });

});
