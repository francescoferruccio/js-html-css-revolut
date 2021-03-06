$(document).ready(function() {
  // salvo la selezione del dropdown menu in una variabile
  var dropdown = $(".dropdown");
  // setto tutti i dropdown nascosti di default
  dropdown.hide();

  // imposto un evento che all'hover mi mostri i dropdown menu relativi al li su cui sono
  $(".navbar li").hover(
    function() {
      $(this).children(".dropdown").toggle();
    }
  )
});

// funzione che al click sull'icona hamburger mostra o nasconde l'hamburger menu assegnandogli o togliendo la classe css "visible"
$(".hamburgerOpen").click(
  function() {
    $(".hamburgerMenu").toggleClass("visible");
  }
);

// funzione che gestisce l'apertura dei dropdown menu in versione mobile al click invece che all'hover
$(".hamburgerMenu li").click(
  function() {
    $(this).children(".dropdown").toggle();
  }
);
