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
  google.maps.event.addDomListener(window, 'load', initialize);
  //google.maps.event.trigger(map, 'resize');

function clickInicio(){
  $('#contenedor_bloques').prepend($('#bloque_inicio'));
  $('#bloque_inicio').slideDown();
  /*$('#bloque_info').slideUp();*/
  $('#bloque_tratamientos').slideUp();
  $('#bloque_personal').slideUp();
  $('#bloque_contacto').slideUp();

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
  $('#contenedor_bloques').prepend($('#bloque_tratamientos'));
  $('#bloque_tratamientos').slideDown();
  $('#bloque_inicio').slideUp();
/*  $('#bloque_info').slideUp();*/
  $('#bloque_personal').slideUp();
  $('#bloque_contacto').slideUp();

  document.getElementById("nav_inicio").classList.remove("active");
 /* document.getElementById("nav_info").classList.remove("active");*/
  document.getElementById("nav_tratamientos").classList.add("active");
  document.getElementById("nav_personal").classList.remove("active");
  document.getElementById("nav_contacto").classList.remove("active");

 /* document.getElementById("hover_image1").classList.add("resizable_hover_image");
  document.getElementById("hover_image2").classList.add("resizable_hover_image");
  document.getElementById("hover_image3").classList.add("resizable_hover_image");*/

}
function clickPersonal(){
  $('#contenedor_bloques').prepend($('#bloque_personal'));
  $('#bloque_personal').slideDown();
  $('#bloque_inicio').slideUp();
/*  $('#bloque_info').slideUp();*/
  $('#bloque_tratamientos').slideUp();
  $('#bloque_contacto').slideUp();

  document.getElementById("nav_inicio").classList.remove("active");
/*  document.getElementById("nav_info").classList.remove("active");*/
  document.getElementById("nav_tratamientos").classList.remove("active");
  document.getElementById("nav_personal").classList.add("active");
  document.getElementById("nav_contacto").classList.remove("active");
}
function clickContacto(){
  $('#contenedor_bloques').prepend($('#bloque_contacto'));
  $('#bloque_contacto').slideDown();
  $('#bloque_inicio').slideUp();
/*  $('#bloque_info').slideUp();*/
  $('#bloque_tratamientos').slideUp();
  $('#bloque_personal').slideUp();

  document.getElementById("nav_inicio").classList.remove("active");
  /*document.getElementById("nav_info").classList.remove("active");*/
  document.getElementById("nav_tratamientos").classList.remove("active");
  document.getElementById("nav_personal").classList.remove("active");
  document.getElementById("nav_contacto").classList.add("active");

  document.getElementById("map-canvas").style.display="block";
  initialize();
  
}


/*Functions for image-slide expositors*/

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


$( ".resizable_hover_image" ).on( "mouseenter", function() {
/*console.log( $( this ).text() );
});

$('.resizable_hover_image').mouseenter(function() {*/
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