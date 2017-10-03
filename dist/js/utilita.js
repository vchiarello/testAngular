function gestisciErrore(response){
	if (response.status==401) {
		  console.log("Errore 401.");
		  window.location.href="error/401.html"
	  }else if (response.status==403) {
		  console.log("Errore 403.");
		  window.location.href="error/403.html"
	  }else if (response.status==404) {
		  console.log("Errore 404");
		  window.location.href="error/404.html"
	  }else if (response.status==500) {
		  console.log("Errore 500");
		  window.location.href="error/500.html"
	  }else {
		  console.log("Errore generico");
		  window.location.href="error/erroreGenerico.html"
	  }
}