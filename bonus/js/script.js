// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

// Bonus:
// i pallini si evidenziano in accordo alla img corrispondente
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// altro esempio: Generiamo i pallini con JS (ma quello che volete liberamente)

// >>>>>>>>>>>>>>>>> INIZIO ESERCIZIO <<<<<<<<<<<<<<<<<<<<

$(document).ready(function () {

  $(".next").click(nextImg);
  $(".prev").click(prevImg);

  // --------- Utilizzo la funzione keydown con una condizione associata al tasto sinitro e destro che corrispondo al keycode 39 e 37.
  // se l'evento del keypress == 39 il programma riconosce che ho premuto il tasto destro e richiamerò la funzione nextImg,stessa cosa per il tasto sinistro richiamerò la funzione prevImg

  $(document).keydown(function(press) {
     if (event.keyCode == 39) {
         nextImg()
     } else if (event.keyCode == 37) {
         prevImg();
     }
 });

  //FUNZIONI

  // funzione per il tasto NEXT
  function nextImg() {

    // dichiaro una variabile che avrà il valore dell'immagine che avrà la classe .active in quel momento
    var imgActive = $("img.active");
    // tolgo la classe active all'immagine attiva in quel momento e con una condizione sotto andrò ad assegnarla all'img successiva
    imgActive.removeClass("active");

    // se l'img attiva in questo momento ha classe "last" allora torna alla prima img con classe "first" associandogli la classe active
    if (imgActive.hasClass("last")){

      $("img.first").addClass("active");

    } else {// altrimenti dai classe active all'immagine successiva usando ".next"

      imgActive.next("img").addClass("active");

    }

    // >>>> BONUS ESERCIZIO 1 PARTE 1 <<<<<

    // dichiaro le stesse identiche condizioni ai tag "i" dando classe active e togliendola
    var circleActive = $("i.active");
    circleActive.removeClass("active");
    if (circleActive.hasClass("last")) {
      $("i.first").addClass("active");
    }else {
     circleActive.next("i").addClass("active");
    }

    // >>>>> FINE ESERCIZIO BONUS PARTE 1 <<<<<<<

  }  // fine funzione tasto NEXT

  // funzione per il tasto PREV
  function prevImg() {

    // dichiaro una variabile che avrà il valore dell'immagine che avrà la classe .active in quel momento
    var imgActive = $("img.active");
    // tolgo la classe active all'immagine attiva in quel momento e con una condizione sotto andrò ad assegnarla all'img precedente
    imgActive.removeClass("active");

    // se l'img attiva in questo momento ha classe "first" allora torna all'ultima img con classe "last" associandogli la classe active
    if (imgActive.hasClass("first")){

      $("img.last").addClass("active");

    } else {// altrimenti dai classe active all'immagine precedente usando ".prev"

      imgActive.prev("img").addClass("active");

    }

    // >>>> BONUS ESERCIZIO 1 PARTE 2 <<<<<

    // dichiaro le stesse identiche condizioni ai tag "i" dando classe active e togliendola
    var circleActive = $("i.active");
    circleActive.removeClass("active");
    if (circleActive.hasClass("first")) {
      $("i.last").addClass("active");
    }else {
     circleActive.prev("i").addClass("active");
    }

    // >>>>> FINE ESERCIZIO BONUS PARTE 2 <<<<<<<

  }

  //>>>>>>>>>>>>>>>>>ESERCIZIO BONUS 2 <<<<<<<<<<<<<<<<<<

  // creo funzione per cliccare sui circle ed associare l'img al click
  $("i.fa-circle").click(function () {

    $(".nav > .active").removeClass("active");// tolgo la classe active al circle che l'aveva
    $(this).addClass("active");//do la classe active al preciso elemento cliccato
    var clicked = $(this).index(); // dichiaro una variabile che avrà il valore index di quello che ho cliccato
    $("img.active").removeClass("active"); //tolgo la classe active all'img che l'aveva
    var imgSelect = $(".images > img"); // dichiaro una variabile con valore uguale elemento img
    var imgShow = "img:nth-child(" + (clicked + 1) + ")"; // creo variabile che avrà valore uguale ai figli di img con valore index del circle cliccato
    $(imgShow).addClass("active"); // aggiungo classe all'immagine trovata nella riga precedente

  })

   //>>>>>>>>>>>>>>>>>FINE ESERCIZIO BONUS 2 <<<<<<<<<<<<<<<<<<



}); // fine document ready
