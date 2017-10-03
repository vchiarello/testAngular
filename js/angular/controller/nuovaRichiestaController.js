angular.module("richiesteReteApp").controller("nuovaRichiestaController", ['$scope', '$stateParams', '$state', '$http', function ($scope, $stateParams, $state, $http) {

	$scope.richiestaReteBean = {};
	$scope.date = new Date();
	
	
	function init() {
		console.log("nuova richiesta controller...");		
//		getListeRichieste();
	}
	
	init();

//	function getListeRichieste(){
//		$scope.promessa= $http({method: 'GET',url:'./rest/RichiesteRete/list/'+$stateParams.stato+'/'+$scope.paginaCorrente}).
//		then(function successCallback(response){
//			$scope.stato = $stateParams.stato;
//			$scope.RichiesteReteWeb = response.data;
//
//			console.log("scaricati " + $scope.listaDati.length + "record");
//		},
//		function errorCallback(response){alert("Errore");gestisciErrore(response);});
//	}
	
	/*
	function Ctrl($scope)
	{
	    $scope.date = new Date();
	}
	*/
	
	
	$scope.salva = function (richiestaReteBean) {
      	$http.post('/rest/RichiesteRete/salvaNuovaRichiesta', richiestaReteBean, {
      		headers: {'Content-Type': 'application/json'}
      	})
      	.success(function(result){
//      		$scope.richiestaReteBean = result;
      		
      		alert('Salvataggio Avvenuto con successo');
      		$state.go('home');
      	})
          .error(function(){
        	 alert('errore');
          });
      			
      };

	

}]);
