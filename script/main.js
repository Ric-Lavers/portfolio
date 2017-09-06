$(document).ready(function(){

  function removeFocus() {
    $('.menu .btn').each( function(){
      var $this = $(this);
      if( $this.hasClass('focus')){
        $this.removeClass('focus');
      }
    });
  };//removeFocus

  $(".opening").click(function(){
    $(".my-sections").removeClass('open-para');
    removeFocus();
  });

  $('.my-button').click(function(e) {
    var str = $( this ).text();
    console.log('working');
    // e.preventDefault();
    $(".focus").removeClass('focus');
    $(this).addClass('focus');
    $(".open-para").removeClass("open-para");
//a setTimeout has to be used as  delay() can only be used on animations
    setTimeout(function(){
       $('#' + str).addClass("open-para")
     }, 100);
  });
});


//draw Contact Box on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 450) {
      $('#Layer_3').removeClass('static').addClass('motion');
      $('#text_1').addClass('text1');
      $('#text_2').addClass('text2');
      $('#text_3').addClass('text3');
      $('#text_4').addClass('text4');
    }
});





// var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});
//
// 	// build scenes
// 	new ScrollMagic.Scene({triggerElement: "#Layer_3"})
// 					.setClassToggle("static", "motion") // add class toggle
// 					.addIndicators() // add indicators (requires plugin)
// 					.addTo(controller);
