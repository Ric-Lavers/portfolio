
$(document).ready(function(){

  $('#btn-one').click(function(e) {
    console.log('fucking working');

    e.preventDefault();

    $(this).addClass('focus');

    // $('#one').delay(4000).addClass('open-para');

    setTimeout(function(){
       $("#one").addClass("open-para");
     }, 100);

    //$('#one').attr('class', '')
  });

});
