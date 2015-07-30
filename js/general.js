 




/*  
$('#pie').ready(function(){
*/
 /*   clickInicio();*/
    
/*  });*/



  
$('body').ready(function(){

    clickInicio();
    load_Home();
    
  });








  function initialize() {
    var myLatlng = new google.maps.LatLng(40.451846,-3.687233);
    var mapOptions = {
      center: myLatlng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Centro médico Concha Espina'});
  }
  
  //map = new google.maps.Map(document.getElementById("map_canvas"), { mapTypeId: google.maps.MapTypeId.ROADMAP });
  google.maps.event.addDomListener(window, 'load', initialize());
 
  //google.maps.event.trigger(map, 'resize');






/*Active tabs control*/

function clickInicio(){


  $("#contenedor_bloques").load("./html/home.html");


  document.getElementById("nav_inicio").classList.add("active");
/*  document.getElementById("nav_info").classList.remove("active");*/
  document.getElementById("nav_tratamientos").classList.remove("active");
  document.getElementById("nav_personal").classList.remove("active");
  document.getElementById("nav_contacto").classList.remove("active");
}

/*function clickInfo(){
  $('#contenedor_bloques').prepend($('#bloque_info'));
  $('#bloque_info').slideDown();
  $('#bloque_inicio').slideUp();
  $('#bloque_tratamientos').slideUp();
  $('#bloque_personal').slideUp();
  $('#bloque_contacto').slideUp();

  document.getElementById("nav_inicio").classList.remove("active");
  document.getElementById("nav_info").classList.add("active");
  document.getElementById("nav_tratamientos").classList.remove("active");
  document.getElementById("nav_personal").classList.remove("active");
  document.getElementById("nav_contacto").classList.remove("active");

  document.getElementById("map-canvas").style.display="block";
  initialize();
}*/

function clickTratamientos(){

  document.getElementById("nav_inicio").classList.remove("active");
  document.getElementById("nav_tratamientos").classList.add("active");
  document.getElementById("nav_personal").classList.remove("active");
  document.getElementById("nav_contacto").classList.remove("active");

}

function clickConocenos(){

  document.getElementById("nav_inicio").classList.remove("active");
  document.getElementById("nav_tratamientos").classList.remove("active");
  document.getElementById("nav_personal").classList.add("active");
  document.getElementById("nav_contacto").classList.remove("active");
}


function clickContacto(){

  document.getElementById("nav_inicio").classList.remove("active");
  document.getElementById("nav_tratamientos").classList.remove("active");
  document.getElementById("nav_personal").classList.remove("active");
  document.getElementById("nav_contacto").classList.add("active");

  document.getElementById("map-canvas").style.display="block";
  initialize();
 /* google.maps.event.addDomListener(window, 'load', initialize);*/
}







/*load each HTML*/
function load_Home(){

  $("#contenedor_bloques").load("./html/home.html");
  clickInicio();

  window.twttr = (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
              if (d.getElementById(id)) return t;
              js = d.createElement(s);
              js.id = id;
              js.src = "https://platform.twitter.com/widgets.js";
              fjs.parentNode.insertBefore(js, fjs);
             
              t._e = [];
              t.ready = function(f) {
                t._e.push(f);
              };
             
              return t;
            }(document, "script", "twitter-wjs"));
}


function load_tratamientos(){

  $('#contenedor_bloques').load('./html/tratamientos.html');
  clickTratamientos();

}

function load_tratamientos_laser(){

  $("#contenedor_bloques").load("./html/tratamientos/depilacion_laser.html");
  clickTratamientos();
}

function load_tratamientos_Dgeneral(){

  $("#contenedor_bloques").load("./html/tratamientos.html");
  clickTratamientos();
}

function load_tratamientos_Destetica(){

  $("#contenedor_bloques").load("./html/tratamientos/derm_estetica.html");
  clickTratamientos();
}

function load_tratamientos_Dpediatrica(){

  $("#contenedor_bloques").load("./html/tratamientos/derm_pediatrica.html");
  clickTratamientos();
}

function load_tratamientos_cirugiaDerm(){

  $("#contenedor_bloques").load("./html/tratamientos/cirugiaDerm.html");
  clickTratamientos();
}


function load_contacto(){

  $('#contenedor_bloques').load('./html/contacto.html');
  clickContacto();

}

function load_conocenos(){

  $('#contenedor_bloques').load('./html/conocenos.html#fig');
  clickConocenos();

}





/*Functions for image-slide expositors*/


/*do a single image clicker
function clickImage1(image, number){
 $('#espacio').empty();*/
/*  document.getElementById(image);

  $('#espacio').prepend($('#slide_block1'));
  $('#slide_block1').slideDown();
  $('#slide_block2').slideUp();
  $('#slide_block3').slideUp();
  $('#slide_block4').slideUp();

}*/



function clickImage1(){
/*  $('#espacio').empty();*/
  $('#espacio').prepend($('#slide_block1'));
  $('#slide_block1').slideDown();
  $('#slide_block2').slideUp();
  $('#slide_block3').slideUp();
  $('#slide_block4').slideUp();

}

function clickImage2(){
/*  $('#espacio').empty();*/
  $('#espacio').prepend($('#slide_block2'));
  $('#slide_block2').slideDown();
  $('#slide_block1').slideUp();
  $('#slide_block3').slideUp();
  $('#slide_block4').slideUp();

}
function clickImage3(){
/*  $('#espacio').empty();*/
  $('#espacio').prepend($('#slide_block3'));
  $('#slide_block3').slideDown();
  $('#slide_block1').slideUp();
  $('#slide_block2').slideUp();
  $('#slide_block4').slideUp();
}

function clickImage4(){
/*  $('#espacio').empty();*/
  $('#espacio').prepend($('#slide_block4'));
  $('#slide_block4').slideDown();
  $('#slide_block1').slideUp();
  $('#slide_block2').slideUp();
  $('#slide_block3').slideUp();
}


/* Resizing images*/

var factor = 2; /*double size*/
var foo_width = $('.resizable_hover_image').width();
var foo_height = $('.resizable_hover_image').height();


/*$('.resizable_hover_image').mouseenter(function() {
    $(this).animate({
        top: '-=' + foo_width / factor,
        left: '-=' + foo_height / factor,
        width: $(this).width() * factor,
        height: $(this).height() * factor
        
    },1000);
    $(this).css('z-index', 100);
});
*/
/*$('.resizable_hover_image').mouseout(function() {
    $(this).animate({
        top: '+=' + foo_width/ factor,
        left: '+=' + foo_height / factor,
        width: $(this).width() / factor,
        height: $(this).height() / factor

        
    },1000);
    $(this).css('z-index', 1);
});*/


$(".resizable_hover_image" ).on( "mouseenter", function() {

/*$('.resizable_hover_image').mouseenter(function() {*/
    $(this).animate({
        top: '-=' + foo_width / factor,
        /*top: '+= 50px' ,*/
        left: '-=' + foo_height / factor ,
        /*left: '+= 25px' ,*/
        width: 100*factor,
        height: 150*factor
        
    },500);
    $(this).css('z-index', 100);
    $(this).css('opacity', 1);
});

$( ".resizable_hover_image" ).on( "mouseout", function() {
/*$('.resizable_hover_image').mouseout(function() {*/
    $(this).animate({
        top: '+=' + foo_width/ factor ,
        /*top: '+= 0',*/
        left: '+=' + foo_height / factor ,
        /*left: '+=0',*/
        width: 100,
        height: 150

        
    },500);
    $(this).css('z-index', 1);
    $(this).css('opacity', 0.7);
});


