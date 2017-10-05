angular.module("richiesteReteApp").controller("testController", ['$scope', '$http', function ($scope, $http) {

     
	function init() {
		console.log("test controller...")
	}
	
	init();

   $http.get('json/contentTest2.json').success(function(response) {
        $scope.risultato= response.data;
    });

    $scope.toggle = function(n){
        if ( n.figli.length>0)
            n.aperto=!n.aperto;
    }


    $scope.imgSelezioneNodo = function(n){
        if (statoSelezioneFigli(n)==1) return "./images/TuttoSelezione.png";
        if (statoSelezioneFigli(n)==0) return "./images/AlmenoUnoSelezione.png";
        return "./images/nessunaSelezione.png";
    }

    function statoSelezioneFigli(n){
        if ((n.figli === undefined || n.figli == null || n.figli.length==0) && n.selezionato)
            return 1;
        else if ((n.figli === undefined || n.figli == null || n.figli.length==0) && !n.selezionato)    
            return -1;

        var tuttiSelezionati = true;
        var almenoUnoSelezionato = false;
        
        for (var i = 0; i < n.figli.length;i++){
            sFigli = statoSelezioneFigli(n.figli[i]);

            if (tuttiSelezionati && sFigli!=1)tuttiSelezionati = false;
            if (sFigli!=-1)almenoUnoSelezionato = true;
        }

        if (tuttiSelezionati)return 1;
        if (!tuttiSelezionati && almenoUnoSelezionato) return 0;
        return -1

    }

    $scope.cambiaSelezioneNodo = function(n){
        if (n.figli === undefined || n.figli == null || n.figli.length==0 ){
            n.selezionato = ! n.selezionato;
            return;
        }    

        if (statoSelezioneFigli(n) == 1)
            mettiSelezioneNodo(n,0)
        else    
            mettiSelezioneNodo(n,1)
        
    }
    
    function mettiSelezioneNodo(n,valore){
        if ((n.figli === undefined || n.figli == null || n.figli.length==0) && valore ==0){
            n.selezionato = false;
            return;
        }
        else if ((n.figli === undefined || n.figli == null || n.figli.length==0) && valore ==1){
            n.selezionato = true; 
            return;
        }
               
       for (var i = 0; i < n.figli.length;i++)
            mettiSelezioneNodo(n.figli[i],valore);
    }

    $scope.imgNodo = function(n){
        //se è una foglia l'immagine è foglia
        if ((n.imgAlbero ===undefined) && (n.figli === undefined || n.figli == null || n.figli.length==0))
            n.imgAlbero = "./images/foglia.png";
        else if ((n.figli === undefined || n.figli == null || n.figli.length==0))
            n.imgAlbero = "./images/foglia.png";
        else if (n.imgAlbero ===undefined) // altrimenti c'è albero chiuso
            n.imgAlbero = "./images/chiuso.png";
        else if (n.aperto && n.figli.length>0) // se albero aperto icona aperto
            n.imgAlbero = "./images/aperto.png";    
        else if (!n.aperto && n.figli.length>0){ // se albero chiuso icona chiuso
            n.imgAlbero = "./images/chiuso.png";    
        }

        return n.imgAlbero;
    }
    

}]);
