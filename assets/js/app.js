$(document).ready(function(){

  $('.primera,.segunda,#container').css('display', 'none');

  $('.logo, .loader').fadeOut(10000, show);

  function show(){
    $('.primera,.segunda,#container').css('display','block');
  }

  $('[data-toggle="tooltip"]').tooltip();


  var cont = $('#container');

  $('#button').click(function press(){
    $('#container').css('display','none');
  });
    $('.select').click(function show(){
      $('#container').css('display','block');
    });

  $('#china').click(function china(){
    cont.html('<h4 style= "color: #7BFC02; margin: 10px 0; text-decoration: underline;">Comida China</h4><img src="assets/img/china/china1.jpg"/><img src="assets/img/china/china2.jpg"/><img src="assets/img/china/china3.jpg"/><img src="assets/img/china/china4.jpg"/>');
    $('.sub-titulo').css('display','none');
    $('.btn').css('margin-top','15px');
    $('#mapa').css('height','120px');
  });

  $('#italiana').click(function italiana(){
    cont.html('<h4 style= "color: #7BFC02; margin: 10px 0; text-decoration: underline;">Comida Italiana</h4><img src="assets/img/italiana/italia1.jpg"/><img src="assets/img/italiana/italia2.jpg"/><img src="assets/img/italiana/italia3.jpg"/><img src="assets/img/italiana/italia4.jpg"/>');
    $('.sub-titulo').css('display','none');
    $('.btn').css('margin-top','15px');
    $('#mapa').css('height','120px');
  });

  $('#peruana').click(function peruana(){
    cont.html('<h4 style= "color: #7BFC02; margin: 10px 0; text-decoration: underline;">Comida Peruana</h4><img src="assets/img/peruana/peru1.jpg"/><img src="assets/img/peruana/peru2.jpg"/><img src="assets/img/peruana/peru3.jpg"/><img src="assets/img/peruana/peru4.jpg"/>');
    $('.sub-titulo').css('display','none');
    $('.btn').css('margin-top','15px');
    $('#mapa').css('height','120px');
  });



});
