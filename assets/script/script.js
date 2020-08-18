(function(){

  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
  //                                   Ubicacion del pin     zoom
    var map = L.map('mapa').setView([6.222841,  -75.584114], 17);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'  
  }).addTo(map);
          //Ubicacion del mapa
  L.marker([6.222841,  -75.584114]).addTo(map)
    .bindPopup('<b>Pizzeria Route 99</b><br>Direccion: Carrera 65 # 20 - 04.<br>Barrio: Santa Fe.')
    .openPopup()
    .binTooltip('Un texto escondido (hover)')
    .openTooltip();

    //Ingresa todo el codigo JavaScript a partir de esta linea

  });

  var ban = 0;

  $('.icono').on('click', function(){

    if(ban == 1){

      $('.diseño-menu').css({'left':'0'});
      console.log("Abre");

      ban = 0;

    } else{

      ban = 1;

      $('.diseño-menu').css({'left':'-100%'});
      console.log("Cierre");

    }


  });

})();
