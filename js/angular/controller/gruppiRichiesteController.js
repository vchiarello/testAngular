angular.module("richiesteReteApp").controller("gruppiRichiesteController", ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

    $scope.campoOrdinato = 1;
    $scope.direzione ='asc';
    $scope.paginaCorrente = 0;
    $scope.openCollapse = 0;
    
	function init() {
        document.getElementById('titolo').innerHTML="Richieste Rete - "+ $stateParams.stato;
		console.log("home controller...");
		getGruppiRichieste();
	}
	
	init();

	function getGruppiRichieste(){
		$scope.promessa= $http({method: 'GET',url:'./rest/RichiesteRete/gruppo/'+$stateParams.stato+'/'+$scope.campoOrdinato+'/'+$scope.direzione+'/'+$scope.paginaCorrente}).
		then(function successCallback(response){
			$scope.stato = $stateParams.stato;
			$scope.GruppiRichiestaReteWeb = response.data;

			console.log("scaricati " + $scope.GruppiRichiestaReteWeb.gruppiRichieste.length + "record");
		},
		function errorCallback(response){alert("Errore");gestisciErrore(response);});
	}

	$scope.classCollapse = function (riga){
		if (riga == $scope.openCollapse)
			return "panel-collapse collapse in";
		else
			return "panel-collapse collapse";
		
		
	}
	
	$scope.frecce = function (numeroCampo) {
		if ($scope.campoOrdinato==numeroCampo && $scope.direzione=='asc') return "sorting_asc";
		else if ($scope.campoOrdinato==numeroCampo && $scope.direzione=='desc') return "sorting_desc";
		else return "sorting";
	}	
	
	$scope.cambiaOrdinamento = function (numeroCampo, collapseId) {
		if($scope.campoOrdinato==numeroCampo && $scope.direzione=='asc') $scope.direzione='desc';
		else {
			$scope.campoOrdinato=numeroCampo;
			$scope.direzione='asc';
		}
		getGruppiRichieste();
		$scope.openCollapse = collapseId;
	}

	$scope.range = function (inizio,fine){
		ris =[];
		if (fine-inizio > 10) fine = inizio+10;  
		for (i = inizio; i <fine;i++) ris.push(i);
		return ris;
	}

	$scope.vaiA = function (n){
		n = parseInt(n);
		if (n < 0 || n>=$scope.GruppiRichiestaReteWeb.totalePagine) return;
		$scope.paginaCorrente = n;
		getGruppiRichieste();
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
		if ($scope.paginaCorrente+1==$scope.GruppiRichiestaReteWeb.totalePagine) return "disabled";
		return"";
	}
	
//	$scope.espandi = function () {
//		$('.collapse')
//        .on('shown.bs.collapse', function(event) {
//          event.stopPropagation();
//            $(this)
//                .parent().parent()
//                .find(".glyphicon-chevron-down")
//                .removeClass("glyphicon-chevron-down")
//                .addClass("glyphicon-chevron-up colorLightBlue");
//        }).on('hidden.bs.collapse', function(event) {
//         event.stopPropagation();
//            $(this)
//                .parent().parent()
//                .find(".glyphicon-chevron-up")
//                .removeClass("glyphicon-chevron-up colorLightBlue")
//                .addClass("glyphicon-chevron-down colorBlue");
//        });
//	}
	
//	$scope.espandiIntestazione = function (nome) {
//	    $(".collapse").on('show.bs.collapse', function(){
//	    	 $('div.panel-body').find('div#'+nome).removeClass('glyphicon-plus-sign').addClass("glyphicon-minus-sign");
//	    	 return;
//	    }).on('hide.bs.collapse', function(){
//	    	 $('div.panel-body').find('div#'+nome).removeClass('glyphicon-minus-sign').addClass("glyphicon-plus-sign");
//	    	 return;
//	    });
	    
//		$(nome).on('shown.bs.collapse', function(event) {
//          event.stopPropagation();
//          alert( $(this).parent().find("#a"+nome).val('ddddd'));
//          $(this).parent()
//                .find("#a"+nome)
//                .removeClass("glyphicon-plus-sign")
//                .addClass("glyphicon-minus-sign colorLightBlue");
//        }).on('hidden.bs.collapse', function(event) {
//         event.stopPropagation();
//         $(this).parent()
//                .find(".a")
//                .removeClass("glyphicon-minus-sign colorLightBlue")
//                .addClass("glyphicon-plus-sign colorBlue");
//        });
//	}

}]);
