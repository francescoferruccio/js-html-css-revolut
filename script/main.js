$(document).ready(function() {
  // salvo la selezione del dropdown menu in una variabile
  var dropdown = $(".dropdown");
  // setto tutti i dropdown nascosti di default
  dropdown.hide();

  // imposto un evento che all'hover mi mostri i dropdown menu relativi al li su cui sono
  $("li").hover(
    function() {
      $(this).children(".dropdown").toggle();
    }
  )
});
