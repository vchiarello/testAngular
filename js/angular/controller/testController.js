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
        if (n.imgAlbero == "./images/chiuso.png")
            n.imgAlbero = "./images/aperto.png"
        else
            n.imgAlbero = "./images/chiuso.png"
    }

    $scope.fogliaSelezionata = function(f){
        return fSelezionata(f);
    }

    function fSelezionata(f){
        return f.selezionato;
    }

    $scope.imgSelezioneNodo = function(n){
        if (statoSelezioneFigli(n)==1) return "./images/TuttoSelezione.png";
        if (statoSelezioneFigli(n)==0) return "./images/AlmenoUnoSelezione.png";
        return "./images/nessunaSelezione.png";
    }

    function statoSelezioneFigli(n){
        var tuttiSelezionati = true;
        var almenoUnoSelezionato = false;
        for (i = 0; i < n.foglie.length;i++){
            if (tuttiSelezionati && !n.foglie[i].selezionato)tuttiSelezionati = false;
            if (n.foglie[i].selezionato)almenoUnoSelezionato = true;
        }

        if (tuttiSelezionati)return 1;
        if (!tuttiSelezionati && almenoUnoSelezionato) return 0;
        return -1

    }

    $scope.cambiaSelezioneNodo = function(n){
        if (statoSelezioneFigli(n) == 1)
            for (i = 0; i < n.foglie.length; i++)n.foglie[i].selezionato=false;
        else    
            for (i = 0; i < n.foglie.length; i++)n.foglie[i].selezionato=true;

    }

    $scope.imgNodo = function(n){
        if (n.imgAlbero ===undefined){
            n.imgAlbero = "./images/chiuso.png";
        }
        return n.imgAlbero;
    }
    
    $scope.selezioneFoglia = function(f){
        if (f.selezionato)
            return "./images/TuttoSelezione.png";
        else
            return "./images/nessunaSelezione.png";
    }
    
    $scope.cambiaSelezioneFoglia = function(f){
        f.selezionato = !f.selezionato;
    }
    

}]);
