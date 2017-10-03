angular.module("richiesteReteApp").controller("tabelleRichiesteController", ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

    $scope.campoOrdinato = 1;
    $scope.direzione ='asc';
    $scope.paginaCorrente = 0;
	$scope.ricerca = null;

	function init() {
        document.getElementById('titolo').innerHTML="Richieste Rete - "+ $stateParams.stato;
		console.log("home controller...");
		getListeRichieste();
	}
	
	init();

	function getListeRichieste(){
		$scope.promessa= $http({method: 'GET',url:'./rest/RichiesteRete/tabella/'+$stateParams.stato+'/'+$scope.ricerca+'/'+$scope.campoOrdinato+'/'+$scope.direzione+'/'+$scope.paginaCorrente}).
		then(function successCallback(response){
			$scope.stato = $stateParams.stato;
			$scope.RichiesteReteWeb = response.data;

			console.log("scaricati " + $scope.RichiesteReteWeb.lista.length + "record");
		},
		function errorCallback(response){alert("Errore");gestisciErrore(response);});
	}

	
	$scope.frecce = function (numeroCampo) {
		if ($scope.campoOrdinato==numeroCampo && $scope.direzione=='asc') return "sorting_asc";
		else if ($scope.campoOrdinato==numeroCampo && $scope.direzione=='desc') return "sorting_desc";
		else return "sorting";
	}	
	
	$scope.cambiaOrdinamento = function (numeroCampo) {
		if($scope.campoOrdinato==numeroCampo && $scope.direzione=='asc') $scope.direzione='desc';
		else {
			$scope.campoOrdinato=numeroCampo;
			$scope.direzione='asc';
		}
		getListeRichieste();
	}

	$scope.range = function (inizio,fine){
		ris =[];
		if (fine-inizio > 10) fine = inizio+10;  
		for (i = inizio; i <fine;i++) ris.push(i);
		return ris;
	}

	$scope.vaiA = function (n){
		n = parseInt(n);
		if (n < 0 || n>=$scope.RichiesteReteWeb.totalePagine) return;
		$scope.paginaCorrente = n;
		getListeRichieste();
	}
	
	$scope.isPaginaAttiva = function (indice){
		if (indice == $scope.paginaCorrente) return "active";
		return "";
	}

	$scope.disableFirst = function () {
		if ($scope.paginaCorrente==0) return "disabled";
		return"";
	}
	
	$scope.disableLast = function () {
		if ($scope.paginaCorrente+1==$scope.RichiesteReteWeb.totalePagine) return "disabled";
		return"";
	}

	$scope.search = function (s){
		if (s == "") s = null;
		$scope.ricerca = s;
		getListeRichieste();
	}
	
	$scope.iconaStato = function (idStato) {
		if (idStato=='1') return "./image/vwicn114.gif";
		if (idStato=='2') return "./image/vwicn120.gif";
		if (idStato=='3') return "./image/vwicn117.gif";
		if (idStato=='4') return "./image/vwicn115.gif";
		if (idStato=='5') return "./image/vwicn092.gif";
		return "";
	}

	$scope.espandi = function () {
		$('.collapse')
        .on('shown.bs.collapse', function(event) {
          event.stopPropagation();
            $(this)
                .parent().parent()
                .find(".glyphicon-chevron-down")
                .removeClass("glyphicon-chevron-down")
                .addClass("glyphicon-chevron-up colorLightBlue");
        }).on('hidden.bs.collapse', function(event) {
         event.stopPropagation();
            $(this)
                .parent().parent()
                .find(".glyphicon-chevron-up")
                .removeClass("glyphicon-chevron-up colorLightBlue")
                .addClass("glyphicon-chevron-down colorBlue");
        });
	}

}]);
