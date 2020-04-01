$(document).ready(function() {
  // salvo la selezione del dropdown menu in una variabile
  var dropdown = $(".dropdown");
  // setto tutti i dropdown nascosti di default
  dropdown.hide();

  // imposto un evento che all'hover mi mostri i dropdown menu relativi al li su cui sono
  // $(".navbar li").hover(
  //   function() {
  //     $(this).children(".dropdown").toggle();
  //   }
  // )

  // funziona che al mouse enter espande il dropdown menu corrispondente e chiude gli altri eventualmente aperti
  $(".expandable").mouseenter(
    function() {
      $(this).children(".dropdown").show();
      $(".dropdown").not($(this).children()).hide();
    }
  )

  // funzione che chiude tutti i dropdown menu quando si clicca in qualsiasi punto della pagina
  $(document).click(
    function() {
      $(".dropdown").hide();
    }
  );

  // funzione che al click sull'icona hamburger mostra l'hamburger menu assegnandogli la classe css "visible"
  $(".fa-bars").click(
    function() {
      $(".hamburgerMenu").addClass("visible");
    }
  );

  // funzione che al click sull'icona di chiusura nasconde l'hamburger menu togliendo la classe css "visible"
  $(".fa-times").click(
    function() {
      $(".hamburgerMenu").removeClass("visible");
    }
  );

  // funzione che gestisce l'apertura dei dropdown menu in versione mobile al click invece che all'hover
  $(".hamburgerMenu li").click(
    function() {
      $(this).children(".dropdown").toggle();
    }
  );

  // funziona che al click sui dropdown menu dell'hamburger cambia l'icona
  $(".hamburgerMenu li").click(
    function() {
      $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
    }
  );

});
