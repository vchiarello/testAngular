angular.module("richiesteReteApp").controller("testController", ['$scope', '$http', function ($scope, $http) {

     
	function init() {
		console.log("test controller...")
	}
	
	init();

   $http.get('json/contentTest.json').success(function(response) {
        $scope.risultato= response.data;
    });

    $scope.toggle = function(n){
        n.aperto=!n.aperto;
    }

    $scope.fogliaSelezionata = function(f){
        return fSelezionata(f);
    }

    function fSelezionata(f){
        return f.selezionato;
    }


    $scope.pippo = "{color:'red'}";

    $scope.nodoSelezionato = function(n){
        var tuttiSelezionati = true;
        var almenoUnoSelezionato = false;
        for (i = 0; i < n.foglie.length;i++){
            if (tuttiSelezionati && !n.foglie[i].selezionato)tuttiSelezionati = false;
            if (almenoUnoSelezionato && n.foglie[i].selezionato)almenoUnoSelezionato = true;
        }
        if (tuttiSelezionati)return 1;
        if (!tuttiSelezionati && almenoUnoSelezionato)return 0;
        return -1;
        
    }

}]);
